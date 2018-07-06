import React, {Component} from 'react';
import Comment from './Comment';

export default class Activities extends Component {
    state = {
        comments: [
            new UserComment('One', "images/cust1.jpeg", "John", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam."),
            new UserComment('Two', "images/cust2.jpeg", "Mark", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam."),
            new UserComment('Three', "images/cust3.jpeg", "Monica", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam."),
            new UserComment('Four', "images/cust4.jpeg", "Vivien", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam."),
            new UserComment('Five', "images/cust5.jpeg", "Nick", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam."),
            new UserComment('Six', "images/cust6.jpeg", "Ann", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam.")
        ]
    };

    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                            <div className="row align-items-center mb-5">

                                <div className="col-xl-7">
                                    <h4 className="text-muted mb-4">Recent Customer Activities</h4>
                                    <div id="accordion">
                                        {this.state.comments.map((comment) => <Comment postNum={comment.postNum}
                                                                                       imgSrc={comment.imgSrc}
                                                                                       userName={comment.userName}
                                                                                       comment={comment.comment}/>)}
                                    </div>
                                </div>

                                <div className="col-xl-5 mt-5">
                                    <div className="card rounded">
                                        <div className="card-body">

                                            <h5 className="text-muted text-center mb-4">Quick Status Post</h5>
                                            <ul className="list-inline text-center py-3">
                                                <li className="list-inline-item mr-4">
                                                    <a href="#">
                                                        <i className="fas fa-pencil-alt text-success"/>
                                                        <span className="h6 text-muted">Status</span>
                                                    </a>
                                                </li>

                                                <li className="list-inline-item mr-4">
                                                    <a href="#">
                                                        <i className="fas fa-camera text-info">
                                                            <span className="h6 text-muted">Photo</span>
                                                        </i>
                                                    </a>
                                                </li>

                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="fas fa-map-marker-alt text-primary"/>
                                                        <span className="h6 text-muted">Check-in</span>
                                                    </a>
                                                </li>
                                            </ul>

                                            <form>
                                                <div className="form-group">
                                                    <input type="text" class="form-control py-2 mb-3" placeholder="What's Your Status..." />
                                                    <button type="button" class="btn btn-block text-uppercase font-weight-bold text-light bg-info py-2 mb-5">Submit Post</button>
                                                </div>
                                            </form>

                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="card bg-light">
                                                        <i className="far fa-calendar-alt fa-8x text-warning d-block m-auto py-3" />
                                                        <div className="card-body">
                                                            <p className="card-text text-center font-weight-bold text-uppercase">Mon, May 26</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="card bg-light">
                                                        <i className="far fa-clock fa-8x text-danger d-block m-auto py-3" />
                                                        <div className="card-body">
                                                            <p className="card-text text-center font-weight-bold text-uppercase">3:50 AM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class UserComment {
    constructor(postNum = '', imgSrc = '', userName = '', comment = '') {
        this.postNum = postNum;
        this.imgSrc = imgSrc;
        this.userName = userName;
        this.comment = comment;
    }
}