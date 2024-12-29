interface blogType {
    slug : string
    title : string
    content : contentType[]
};

interface contentType {
    type : string;
    value : string;
}

export const blogPost : blogType[] = [
     {
    slug : 'blog-1',
    title : 'First Blog',
    content : [
        {type : 'heading',
         value : 'First Blog'},
        {type : 'paragraph',
         value : 'This is my first blog post on this website which i am posting using dynmic blog posts'
        },
    ]
},
     {
    slug : 'blog-2',
    title : 'Second Blog',
    content : [
        {type : 'heading',
         value : 'Second Blog',},
        {type : 'paragraph',
         value : 'This is my Second blog post on this website which i am posting using dynmic blog posts'
        },
    ]
},
]