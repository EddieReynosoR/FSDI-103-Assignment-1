//Disney Plus
let MovieName, MovieDescription, MovieRating, MovieDuration, MovieDate;

MovieName = "Avengers: Endgame";
MovieDescription = "After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right.";
MovieRating = "B";

MovieDuration="3 hrs 2 min."

MovieDate = "April 26th, 2019.";


    document.write(`
    <h2> Disney Plus Movie </h2> 
    <p> <b>Name:</b> ${MovieName} </p>
    <p> <b>Description:</b> ${MovieDescription} </p>

    <p> <b>Rating:</b> ${MovieRating}</p>

    <p> <b>Duration:</b> ${MovieDuration}</p>

    <p> <b>Date:</b> ${MovieDate}</p>
    `);

//Amazon
let ProductName, ProductDescription, ProductPrice, ProductOwner, ProductAmount;

ProductName = "NBA Lakers Jersey";
ProductDescription = "This is a Lakers Lebron's Jersey";
ProductPrice= 130;
ProductOwner="Eduardo Reynoso";
ProductAmount = 1;

    document.write(`
    <h2> Amazon Product</h2> 
    <p> <b>Name:</b> ${ProductName} </p>
    <p> <b>Description:</b> ${ProductDescription} </p>

    <p> <b>Price:</b> $${ProductPrice}</p>

    <p> <b>Owner:</b> ${ProductOwner}</p>

    <p> <b>Amount:</b> ${ProductAmount}</p>
    `);

//YouTube
let VideoTitle, VideoChannel, VideoViews, VideoLikes, VideoDate;

VideoTitle = "Luis Fonsi - Despacito ft. Daddy Yankee";
VideoChannel = "Luis Fonsi";
VideoViews = "7,8 billion views";
VideoLikes = "48 million";
VideoDate = "January 12th, 2017";

    document.write(`
    <h2> YouTube Video</h2> 
    <p> <b>Title:</b> ${VideoTitle} </p>
    <p> <b>Channel:</b> ${VideoChannel} </p>

    <p> <b>Views:</b> $${VideoViews}</p>

    <p> <b>Likes:</b> ${VideoLikes}</p>

    <p> <b>Date:</b> ${VideoDate}</p>
    `);

//Facebook
let UserName, ProfileDescription, JoinDate, FriendsAmount, PhotosAmount;

UserName = "Eduardo Reynoso";
ProfileDescription = "Hello";
JoinDate = "May, 2011";
FriendsAmount = 343;
PhotosAmount = 28;

    document.write(`
    <h2> Facebook User </h2> 
    <p> <b>Name:</b> ${UserName} </p>
    <p> <b>Profile description:</b> ${ProductDescription} </p>

    <p> <b>Join date:</b> $${JoinDate}</p>

    <p> <b>Friends amount:</b> ${FriendsAmount}</p>

    <p> <b>Photos amount:</b> ${PhotosAmount}</p>
    `);