import React from 'react';
import ReactDOM from 'react-dom';
// npm install --save faker -> Installed for only this project
import faker from 'faker';
import CommentDetail from './CommentDetail'; // ./ means look in the same folder, the file extension is handled by webpack if it's a js file
import ApprovalCard from './ApprovalCard';

// Whenever you have too many props make the component a multiline component like below.
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo="Today at 6:00pm"
                    content={faker.lorem.paragraph()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    timeAgo="Yesterday at 5:00pm"
                    content={faker.lorem.paragraph()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()}
                    timeAgo="Yesterday at 4:25pm"
                    content={faker.lorem.paragraph()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>Are you sure?</ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));