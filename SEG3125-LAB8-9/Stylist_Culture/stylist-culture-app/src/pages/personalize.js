import React, {Component} from 'react';


class PersonalizePage extends Component{
    render(){
        return(
            <div className="signup-form container">
                <h1>Personalize Your Account</h1>
                    <h5>We would love to know more about you.</h5>
                    <p className="text-muted">Note: You can always go back and edit this information in your account settings!</p>
                <div className="signup-process">
                    <ol className="signup">
                        <li className="inline-display">1. Sign up <i class="fa fa-check-circle-o" aria-hidden="true"></i></li>
                        <li className="inline-display">2. Personalize <i class="fa fa-circle-o" aria-hidden="true"></i></li>
                        <li className="inline-display">3. Review <i class="fa fa-circle-o" aria-hidden="true"></i></li>
                    </ol>
                </div>
                <form>
                    <div className="name-form">
                        <div className="form-group row container personalize-form">
                            <div className="col">
                                {/* Image taken from https://rewind.riserapp.com */}
                                <img id="profile" src="https://rewind.riserapp.com/static/img/profile-pic-placeholder.svg" alt="Placeholder Profile Picture"/>
                                <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                                <small id="fileHelp" class="form-text text-muted">Upload a profile picture!</small>
                            </div>
                            <div className="col">
                                <label for="exampleTextarea">Bio: </label>
                                <textarea class="form-control" id="exampleTextarea" rows="8" placeholder="Tell us more about yourself!"></textarea>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col">
                        <button className="previous-btn"><a href="/signup">Previous Page</a></button><br></br>

                        </div>
                        <div className="col">
                            <button className="signup-btn"><a href="/signup/review">Next Page</a></button><br></br>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default PersonalizePage;