'use client'
import {useEffect} from "react";
import {LinkService} from "@/services/Link";
import {redirect} from "next/navigation";
import {useRouter} from "next/router";

const Page = ({params}: { params: { shortLink: string } }) => {
    const router = useRouter()
    useEffect(() => {
        LinkService.get(params.shortLink).then((response) => {
            router.push(response.content.original_link)

        }).catch((error) => {console.log(error)})
    })
    return (
        <div>
            {params.shortLink}

        </div>
    );
};

export default Page;