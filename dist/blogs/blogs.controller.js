"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsController = void 0;
const common_1 = require("@nestjs/common");
const blogs_service_1 = require("./blogs.service");
const create_blog_dto_1 = require("./dto/create-blog.dto");
const platform_express_1 = require("@nestjs/platform-express");
const fs = require("fs");
const path = require("path");
const axios = require('axios');
let BlogsController = class BlogsController {
    constructor(blogsService) {
        this.blogsService = blogsService;
    }
    async createBlog(createBlogDto) {
        const newBlog = {
            title: createBlogDto.title,
            content: createBlogDto.content,
            image: createBlogDto.image,
            user: createBlogDto.user
        };
        const savedBlog = await this.blogsService.create(newBlog);
        return savedBlog;
    }
    async uploadImage(file, body) {
        const uploadDirectory = '../react-proj - Copy/public';
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory, { recursive: true });
        }
        const uniqueFilename = new Date().getTime() + '-' + file.originalname;
        fs.writeFileSync(path.join(uploadDirectory, uniqueFilename), file.buffer);
        const blogPostData = {
            title: body.title,
            content: body.content,
            image: uniqueFilename,
            user: body.user,
            createdAt: body.createdAt
        };
        try {
            const response = await axios.post('http://localhost:3000/blogs', blogPostData);
            console.log('Blog post created:', response.data);
            return response.data;
        }
        catch (error) {
            console.error('Error creating blog post:', error);
            throw error;
        }
    }
    findAll() {
        return this.blogsService.findAll();
    }
    findOne(id) {
        return this.blogsService.findOne(+id);
    }
    update(file, id, body) {
        const uploadDirectory = '../Project/public';
        let blogPostData = { title: '', content: '', user: '', image: '', comments: [] };
        if (file) {
            if (!fs.existsSync(uploadDirectory)) {
                fs.mkdirSync(uploadDirectory, { recursive: true });
            }
            const uniqueFilename = new Date().getTime() + '-' + file.originalname;
            fs.writeFileSync(path.join(uploadDirectory, uniqueFilename), file.buffer);
            blogPostData = {
                title: body.title,
                content: body.content,
                image: uniqueFilename,
                user: body.user,
                comments: []
            };
        }
        else {
            blogPostData = {
                title: body.title,
                content: body.content,
                image: body.image,
                user: body.user,
                comments: []
            };
        }
        return this.blogsService.update(id, blogPostData);
    }
    AddComment(file, id, body) {
        const uploadDirectory = '../Project/public';
        console.log(body.comment);
        return this.blogsService.addComment(id, body);
    }
    async searchBlogs(input) {
        const searchResults = await this.blogsService.search(input);
        return searchResults;
    }
    remove(id) {
        return this.blogsService.remove(id);
    }
};
exports.BlogsController = BlogsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.CreateBlogDto]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "createBlog", null);
__decorate([
    (0, common_1.Post)('/upload-image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/comment'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "AddComment", null);
__decorate([
    (0, common_1.Get)('/search/:input'),
    __param(0, (0, common_1.Param)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "searchBlogs", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "remove", null);
exports.BlogsController = BlogsController = __decorate([
    (0, common_1.Controller)('blogs'),
    __metadata("design:paramtypes", [blogs_service_1.BlogsService])
], BlogsController);
//# sourceMappingURL=blogs.controller.js.map