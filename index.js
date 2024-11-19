const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const heritage = require("./routes/heritage.js");
const culture = require("./routes/culture.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejsMate);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
const UnescoSite = require("./models/schema.js");

require('dotenv').config();

async function main() {
    const mongoURI = process.env.MONGO_URI;

    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB Atlas successfully!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}
main();

app.use("/", heritage, culture);

let site1 = new UnescoSite({
    title: "Ajanta Caves",
    image: [
        "https://i0.wp.com/lambontherhodes.com/wp-content/uploads/2015/12/image34.jpeg?resize=1620%2C1080&ssl=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFu6AMVt_Hz2KqXhbpAZV2c6PuX8odJl5oMiPmJY4XPPyM8LPFu5WimX3jpvnXaoLnRbA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABo6ITOfHNyrRPtTk-P6OAZgedGEwetMDp1VxqLir6CrCtduP5xSMPSzl_ha_QYjvyLc&usqp=CAU"
    ],
    location: "Ajanta, Aurangabad district, Maharashtra, India",
    yearOfInscription: 1983,
    siteId: 242,
    video: "https://www.youtube.com/embed/XUoiz0T2xyg?si=o509L2QN1SQ3FTwZ",
    description: [
        "The Ajanta Caves (1983) Maharashtra The Ajanta Caves (75°40’ N; 20°30’ E) are situated at a distance of 107 km north of Aurangabad, the district headquarters. The caves attained the name from a nearby village named Ajanta located about 12 km. These caves were discovered by an Army Officer in the Madras Regiment of the British Army in 1819 during one of his hunting expeditions. Instantly the discovery became very famous and Ajanta attained a very important tourist destination in the world. The caves, famous for its murals, are the finest surviving examples of Indian art, particularly painting. These caves are excavated in horse–shoe shaped bend of rock surface nearly 76 m in height overlooking a narrow stream known as Waghora. The location of this valley provided a calm and serene environment for the Buddhist monks who retreated at these secluded places during the rainy seasons. This retreat also provided them with enough time for furthering their religious pursuits through intellectual discourses for a considerably longer period. The caves were excavated in different periods (circa. 2nd century B.C. to 6th century A.D.) according to the necessity. Each cave was connected to the stream by a flight of steps, which are now almost obliterated, albeit traces of some could be noticed at some places. ajantacaves In all, total 30 excavations were hewn out of rock which also include an unfinished one. Out of these, five (cave no. 9, 10, 19, 26, and 29) are chaityagrihas and the rest are viharas. In date and style also, these caves can be divided into two broad groups. The earliest excavations belong to the Hinayana phase of Buddhism of which similar examples could also be seen at Bhaja, Kondane, Pitalkhora, Nasik, etc. In total, 5 caves at Ajanta belong to this phase, viz., 9 & 10 which are chaityagrihas and 8, 12, 13, & 15A which are viharas. These caves are datable to the pre-Christian era, the earliest among them being Cave 10 dating from the second century B.C. The object of worship is a stupa here and these caves exhibit the imitation of wooden construction to the extent that the rafters and beams are also sculpted even though they are non-functional.",

        "The addition of new excavations could be noticed again during the period of Vakatakas, the contemporaries of the Imperial Guptas. The caves were caused to be excavated by royal patronage and the feudatories under the Vakatakas as illustrated by the inscriptions found in the caves. Varahadeva, the minister of Vakataka king Harishena (A.D. 475-500) dedicated Cave 16 to the Buddhist Sangha while Cave 17 was the gift of a prince (who subjugated Asmaka) feudatory to the same king. The flurry of activities at Ajanta was between mid 5th century A.D. to mid 6th century A.D. However, Hieun Tsang, the famous Chinese traveller who visited India during the first half of 7th century A.D. has left a vivid and graphic description of the flourishing Buddhist establishment here even though he did not visit the caves. A solitary Rashtrakuta inscription in cave no. 26 indicates its use during 8th – 9th centuries A.D. The second phase departs from the earlier one with the introduction of new pattern in layout as well as the centrality of Buddha image, both in sculpture as well as in famous paintings at Ajanta also fall into two broad phases. The earliest is noticed in the form of fragmentary specimens in cave nos. 9 & 10, which are datable to second century B.C. The headgear and other ornaments of the images in these paintings resemble the bas-relief sculpture of Sanchi and Bharhut. The second phase of paintings started around 5th – 6th centuries A.D. and continued for the next two centuries. The specimen of these exemplary paintings of Vakataka period could be noticed in cave nos. 1, 2, 16 and 17. The variation in style and execution in these paintings also are noticed, mainly due to different authors of them. A decline in the execution is also noticed in some paintings as indicated by some rigid, mechanical and lifeless figures of Buddha in some later period paintings. The main theme of the paintings is the depiction of various Jataka stories, different incidents associated with the life of Buddha, and the contemporary events and social life also. The ceiling decoration invariably consists of decorative patterns, geometrical as well as floral.",
        
        "The paintings were executed after elaborate preparation of the rock surface initially. The rock surface was left with chisel marks and grooves so that the layer applied over it can be held in an effective manner. The ground layer consists of a rough layer of ferruginous earth mixed with rock-grit or sand, vegetable fibres, paddy husk, grass and other fibrous material of organic origin on the rough surface of walls and ceilings. A second coat of mud and ferruginous earth mixed with fine rock-powder or sand and fine fibrous vegetable material was applied over the ground surface. Then the surface was finally finished with a thin coat of lime wash. Over this surface, outlines are drawn boldly, then the spaces are filled with requisite colours in different shades and tones to achieve the effect of rounded and plastic volumes. The colours and shades utilised also vary from red and yellow ochre, terra verte, to lime, kaolin, gypsum, lamp black and lapis lazuli. The chief binding material used here was glue. The paintings at Ajanta are not frescoes as they are painted with the aid of a binding agent, whereas in fresco the paintings are executed while the lime wash is still wet which, thereby acts as an intrinsic binding agent."
    ]
});

//  site1.save();


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});