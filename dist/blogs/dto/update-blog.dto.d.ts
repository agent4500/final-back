import { CreateBlogDto } from './create-blog.dto';
declare const UpdateBlogDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBlogDto>>;
export declare class UpdateBlogDto extends UpdateBlogDto_base {
    title: string;
    content: string;
    image: string;
    comments: Array<any>;
}
export {};
