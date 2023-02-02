interface AllType {
    title: string;
    description: string;
    draft: boolen;
    tags: string[];
    category: string[];
    image: string;
    author: string;
    date: string;
    id: number;
    body: {
        raw: string;
        html: string;
    }
    _id: string;
    _raw: {
        sourceFilePath: string,
        sourceFileName: string,
        sourceFileDir: string,
        contentType: string,
        flattenedPath: string
    }
    type: string;
    slug: string;
}
 
// interface AddressWithUnit extends BasicAddress


export interface Posts{
        [x: string]: any;
        length: number;
        number:string;
        title: string;
        description: string;
        draft: boolen;
        tags: string[];
        category: string[];
        image: string;
        author: string;
        date: date;
        slug: string;
        id: number;
        body: {
            raw: string;
            html: string;
        }
        _id: string;
        _raw: {
            sourceFilePath: string,
            sourceFileName: string,
            sourceFileDir: string,
            contentType: string,
            flattenedPath: string
        }
        type: string;
        url: string;

}

export interface Item {
    length: number;
    id?: number; 
    title?: string; 
    description?: string; 
    date?: date; 
    draft?: boolean; 
    tags?: string[]; 
    category?: string[]; 
    image?: string; 
    author?: string; 
    slug?: string;
}

export interface  Pagination {
    page_par_posts: number,
    pageCount: number[]
}

export interface  PaginationItem {
    page_par_posts: number,
    pageCount: string[]
}

export interface Slug{
    slug: string;
}

// Index page

export interface IndexPage {
    single:{
        id:number;
        title: string;
        description: string;
        date:date;
        draft:boolean;
        tags: string[];
        category: string[];
        image:string;
        author:string;
        slug:image;
    }
    posts: Posts[]
    pagination: {
        page_par_posts: number,
        pageCount: string[]
    }
}

export interface MainType{
    title: string;
    description: string;
    draft: boolen;
    tags: string[];
    category: string[];
    image: string;
    author: string;
    date: date;
    slug: string;
    id: number;
}

// Read page

export interface ReadPage{
    post: allType
    authorPost : allType
    pagination: {
        next: AllType
        prev: AllType
    }
}

// Author page
export interface AuthorPost{
    [x: string]: any;
    length: number;
    id?: number; 
    title?: string; 
    description?: string; 
    date?: date; 
    draft?: boolean; 
    tags?: string[]; 
    category?: string[]; 
    image?: string; 
    author?: string; 
    slug?: string;
}

// Card components

export interface CardType extends AllType {}
export interface itemType extends AllType {}
export interface Post {
    type:string;
    id?: number;
    slug?: string;
    title: string;
    description: string;
    draft: boolen;
    tags: string[];
    category: string[];
    image: string;
    author: string;
    date: date;
    slug: string;
}

// pagination
