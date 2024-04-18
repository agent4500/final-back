import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    createBlog(createBlogDto: CreateBlogDto): Promise<any>;
    uploadImage(file: any, body: any): Promise<any>;
    findAll(): any;
    findOne(id: string): string;
    update(file: any, id: string, body: any): Promise<any>;
    AddComment(file: any, id: string, body: any): Promise<any>;
    searchBlogs(input: string): Promise<any>;
    remove(id: string): Promise<any>;
}
