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
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let BlogsService = class BlogsService {
    constructor(blogs) {
        this.blogs = blogs;
    }
    create(blogData) {
        const createdBlog = new this.blogs(blogData);
        return createdBlog.save();
    }
    findAll() {
        return this.blogs.find().populate('user');
    }
    async search(query) {
        const searchResults = await this.blogs.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { content: { $regex: query, $options: 'i' } },
            ],
        }).exec();
        return searchResults;
    }
    findOne(id) {
        return `This action returns a #${id} blog`;
    }
    async update(id, updateBlogDto) {
        const updatedBlog = await this.blogs
            .findByIdAndUpdate(id, updateBlogDto, { new: true })
            .exec();
        return updatedBlog;
    }
    async addComment(id, body) {
        const blog = await this.blogs.findById(id);
        blog.comments.push(body);
        const blogPostData = {
            title: blog.title,
            content: blog.content,
            image: blog.image,
            user: blog.user,
            comments: [],
        };
        return this.update(id, blogPostData);
    }
    async remove(id) {
        const deletedBlog = await this.blogs.findByIdAndDelete(id).exec();
        return deletedBlog;
    }
};
exports.BlogsService = BlogsService;
exports.BlogsService = BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Blog')),
    __metadata("design:paramtypes", [Object])
], BlogsService);
//# sourceMappingURL=blogs.service.js.map