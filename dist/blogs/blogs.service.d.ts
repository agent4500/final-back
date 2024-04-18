import { UpdateBlogDto } from './dto/update-blog.dto';
export declare class BlogsService {
    private blogs;
    constructor(blogs: any);
    create(blogData: any): any;
    findAll(): any;
    search(query: string): Promise<any>;
    findOne(id: number): string;
    update(id: string, updateBlogDto: UpdateBlogDto): Promise<any>;
    addComment(id: string, body: string): Promise<any>;
    remove(id: string): Promise<any>;
}
