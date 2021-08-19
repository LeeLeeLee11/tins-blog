import React from 'react'
import Link from 'next/link'

interface NewPostsProps {

}

const NewPosts : React.FC<NewPostsProps> = () => {
    const posts = [
        { 'title': 'Việt Nam lên tiếng về việc so sánh Sài Gòn 1975 và Kabul 2021 ở Afghanistan' },
        { 'title': 'Taliban 2.0' },
        { 'title': 'Bloomberg giải thích thông điệp \'người giàu nên trả lại cho xã hội\' của ông Tập' },
        { 'title': 'Tướng Anh kêu gọi thế giới kiên nhẫn với Taliban 2.0' },                
    ]


    return <>
    <div className={`text-lg p-2 bg-green-200`}>
    	<h2>Bài viết mới</h2>
    </div>
    <div className="border-gray-200 border mb-2">
        {posts.map((post, i) => 
            <Link href="#">
            <a 
                href="#"
                className={`block ${i % 2 === 0 ? 'bg-gray-200' : 'bg-white'} p-2`}
            >
                {post.title}
            </a>
            </Link>

        )}
    </div>
    </>
}
 
export default NewPosts
