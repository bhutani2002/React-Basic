import { useHistory} from "react-router-dom";
import useFetch from './useFetch';
const BlogDetails = () => {
    const {data:blog}= useFetch();
    console.log(blog[0].id);
    const history= useHistory();
    const handleBack=(id)=>{
            history.push('/');
    }
    if(window.location.pathname==="/Data/1")
    {
        return (  
            <div className="blog-details">
                    <article>
                        <h2>My First Blog</h2>
                        <p className="data">Why do we use it?<br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/><br/><br/>Where does it come from?<br/>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.<br/><br/>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br/><br/>Where can I get some?<br/>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        <button onClick={()=>handleBack(blog.id)}>Back</button>
                    </article>
            </div>
        );
    }
    if(window.location.pathname==="/Data/2")
    {
        return (  
            <div className="blog-details">
                    <article>
                        <h2>Welcome party!</h2>
                        <p className="data">During the first part of your life, you only become aware of happiness once you have lost it. Then an age comes, a second one, in which you already know, at the moment when you begin to experience true happiness, that you are, at the end of the day, going to lose it. When I met Belle, I understood that I had just entered this second age. I also understood that I hadn’t reached the third age, in which anticipation of the loss of happiness prevents you from living.<br/><br/><br/>Your only chance of survival, if you are sincerely smitten, lies in hiding this fact from the woman you love, of feigning a casual detachment under all circumstances. What sadness there is in this simple observation! What an accusation against man! However, it had never occurred to me to contest this law, nor to imagine disobeying it: love makes you weak, and the weaker of the two is oppressed, tortured and finally killed by the other, who in his or her turn oppresses, tortures and kills without having evil intentions, without even getting pleasure from it, with complete indifference; that’s what men, normally, call love.</p>
                        <button onClick={()=>handleBack(blog.id)}>Back</button>
                    </article>
            </div>
        );
    }
    if(window.location.pathname==="/Data/3")
    {
        return (  
            <div className="blog-details">
                    <article>
                        <h2>Web dev top tips</h2>
                        <p className="data">A secret always has a strengthening effect upon a newborn friendship, as does the shared impression than an external figure is to blame: the men of the Crown have become united less by their shared beliefs, we observe, than by their shared misgivings–which are, in the main, externally directed. In their analyses, variously made, of Alastair Lauderback, George Shepard, Lydia Wells, Francis Carver, Anna Wetherell, and Emery Staines, the Crown men have become more and more suggestive, despite the fact that nothing has been proven, no body has been tried, and no new information has come to light. Their beliefs have become more fanciful, their hypotheses less practical, their counsel less germane. Unconfirmed suspicion tends, over time, to become wilful, fallacious, and prey to the vicissitudes of mood–it acquires all the qualities of common superstition–and the men of the Crown Hotel, whose nexus of allegiance is stitched, after all, in the bright thread of time and motion, have, like all men, no immunity to influence.<br/><br/><br/>For although a man is judged by his actions, by what he has said and done, a man judges himself by what he is willing to do, by what he might have said, or might have done – a judgment that is necessarily hampered, bot only by the scope and limits of his imagination, but by the ever-changing measure of his doubt and self-esteem.</p>
                        <button onClick={()=>handleBack(blog.id)}>Back</button>
                    </article>
            </div>
        );
    }
}
 
export default BlogDetails;