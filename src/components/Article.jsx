import { useState } from "react";
import {Content, PublishButton, Title} from "./index";

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false)
    console.log(isPublished)
    const publishArticle = () => {
        setIsPublished(prevState => !prevState) 
    }
    return (
        <div>
            <tr align="center">
                <Title title={props.title} />
                <Content content={props.content} />
                <PublishButton isPublished={isPublished} onClick={publishArticle} />
            </tr>
        </div>
    );
};

export default Article;