import React from "react";
import avatar from "../../assets/avatar.png"

export default function CardMain() {
    return (
        <main className="card-main">
            <UserInfo />
            <UserAbout />
            <UserInterests />
        </main>
    )
}

function UserInfo() {
    return (
        <section className="user-info" >
            <img className="avatar" src={avatar} alt="avatar" />
            <h2 className="info-name">Dainius Misiunas</h2>
            <p className="info-occupation">Frontend Dev wannabe</p>
            <a className="info-site" href="#">dainiusmi.website</a>
            <div className="button-row">
                <button><i className="fa-solid fa-envelope" /><p>Email</p></button>
                <button><i className="fa-brands fa-linkedin" /><p>LinkedIn</p></button>
            </div>
        </section>
    )
}

function UserAbout() {
    return (
        <section className="user-about more" >
            <h3 className="more-heading">About</h3>
            <p className="more-text">I graduated from "Kaunas University of Applied Sciences" in 2012 with a degree in IT. However, for the past 8 years I have worked in manufacturing sector (mainly with AOI). At present, I am unemployed and my mission is to direct my career towards web development.</p>
        </section>
    )
}

function UserInterests() {
    return (
        <section className="user-intrests more" >
            <h3 className="more-heading">Interests</h3>
            <p className="more-text">Web development, technologies, cars, music</p>
        </section>
    )
}