import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsandUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsandUsers();
    }

    renderList(posts) {
        return posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList(this.props.posts)}</div>;
    }
}

// You need to create a mapStateToProps whenever you want to get data from redux
const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsandUsers })(PostList);