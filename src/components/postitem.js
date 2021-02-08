import React from 'react';

const PostItem = (props) => {
    console.log(props);
    return (
        <div>
            PostsItem {props.match.params.id}
        </div>
    );
};

export default PostItem;
