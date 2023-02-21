import React from 'react';
import {Link} from "gatsby";


const BlogItemPost = ({post, loading, error}) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
    <>
        {
            post?.nodes?.length ? (
                <>{
                    post?.nodes.map( (item, index) => {
                        const no = item.ACFpost.helpfulNo;
                        const yes = item.ACFpost.helpfulYes;
                        // const no = 10;
                        // const yes = 5;
                        const full = no + yes;
                        const yesR = (yes*100)/full;

                        let StarTitle='';
                        if (full === 0) {
                            StarTitle = 'No readers yet';
                        } else {
                            if(full < 10) {
                                StarTitle = 'Few readers';
                            } else {
                                StarTitle = 'Some readers';
                            }
                        }
                        return (
                            <Link to={item.uri} key={`allWpPost-${index}`} className="item-post">
                                <div className="title">
                                    <strong>{item.title}</strong>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm">
                                        <div className="desc">
                                            {item.ACFpost.briefDescription}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-auto">
                                        <div className="star-title">
                                            {StarTitle}
                                        </div>
                                        <div className="star">
                                            <span style={{width: `${yesR}%`}}></span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }</> ) : (
                    loading ? (
                        <div>loading ...</div>
                    ) : (<div>Sorry, no search results, simplify something else...</div>)
            )

        }
    </>
)};
export default BlogItemPost;