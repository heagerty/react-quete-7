import React, { Component } from 'react';

class FavoriteFilm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            posterURL: '',
            reasons: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }



    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    submitForm(e) {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        //const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        const url = "https://post-a-form.herokuapp.com/api/movies/";

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Added film with the ID ${res}!`);
                }
            }).catch(e => {
            console.error(e);
            alert('Error adding film');
        });

    }

    render() {
        return(
            <div className="favorite-film-form">
                <h1> Favorite Film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Details</legend>
                        <div className="form-data">
                            <label htmlFor="title">Title</label>
                            <input required
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="posterURL">Poster URL</label>
                            <input required
                                type="text"
                                id="posterURL"
                                name="posterURL"
                                onChange={this.onChange}
                                value={this.state.posterURL}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="reasons">Reasons</label>
                            <textarea required
                                id="reasons"
                                name="reasons"
                                onChange={this.onChange}
                                value={this.state.reasons}
                            ></textarea>
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}

export default FavoriteFilm
