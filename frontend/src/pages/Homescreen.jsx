import { useState, useEffect } from "react"
import Card from "../components/Card"
import { getBlogs } from "../api/Api"
import { useSearchParams } from "react-router-dom";

const Homescreen = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        async function fetchdata(){
            const allBlogs = await getBlogs();
            setBlogs(allBlogs.data);
            console.log(allBlogs);
        }
        fetchdata();
    }, []);

    useEffect(() => {
        async function fetchdata(){
            const allBlogs = await getBlogs(searchParams.get('category'));
            setBlogs(allBlogs.data);

        }
        fetchdata();
    }, [searchParams]);

    const data = [
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/200/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/201/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/202/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/203/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/204/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/206/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/208/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/209/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
        {
            title:"Perjalanan Gelap",
            image:"https://picsum.photos/id/210/300/200",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis eaque deserunt accusantium odit minus delectus aliquam natus, corporis cupiditate explicabo nesciunt culpa fugit repudiandae ducimus impedit eos nam dolores blanditiis! Maiores excepturi dignissimos nulla numquam sequi obcaecati, possimus fuga repudiandae, ad ipsa magnam officiis, quae cumque optio architecto molestias.",
            createdOn:"2 May, 2024",
            comments:"0",
        },
    ]

  return (
    <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogs && blogs.map((x, i) => {
                return <Card key={i} carddata={x} />
            })}
        </div>
    </div>
  )
}

export default Homescreen

