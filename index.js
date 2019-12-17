let water = document.getElementById("water");
let moon = document.getElementById("moon");
let day = document.getElementById("day_night");
let wind = document.getElementById("wind");
let tide = document.getElementById("tidal");
let month = document.getElementById("runfunc");

// the documented fishing information 

let octMsg = "The month of October has perfect fishing weather.  The Snook are feeding great this month, the Redfish are "+
"everywhere and the large Trout are getting easier to catch.  Grouper are moving closer to inshore and the Snapper "+
"are close behind. Kingfish are begining thier migration moving down the coast from up the north";
let novMsg = "The begining of November is much like October.  The fish in the flats start to go up further in the backwater "+
"preparing for winter.  The Snook, Redfish are still on the flats with some large Trout mixed in.  Pompano can be found "+
"around the edges of the grass flats.  Kingfish and Mackerel can be found close off shore or in the bays. Grouper is "+
"getting better on rock piles in the bay";
let decMsg = "The month of December has days of varing tempatures. In the backwaters, the Redfish can be exceptional "+
"for good size keepers.  Also mixed in with the Redfish are Sheephead and Flounder.  The Snook are still biting on the "+
"warmer days.  The rockpiles in the bay still have a great Grouper and Snapper bite.";
let janMsg = "January is typically the coldest month.  Water temperature is very crtical to catching fish.  If the water "+
"temperature warms to the mid 60s, the Snook and Trout are bitting in the flats.  If the water temperature drops to "+
"the low 60s and 50s fish the Redfish, Sheepshead, Trout, and Flounder on the end of the flats in 4 to 8 ft of water";
let febMsg = "The month of February can vary year to year.  If the water temperature is colder, fish for Redfish, Sheepshead "+
"Trout or Flounder in deeper water (4-8 ft). In warmer water, the shallow water can be great for Redfish, Trout and Snook.";
let marMsg = "March is typically the best fishing month for Snook, Redfish and Trout.  Water is warm enough to be "+
"consistant in the flats.  The Redfish are mixing in thicker with the Snook and the bite it typically steady.  Trout "+
"are also bitting great on the drop offs near the flats.  This is also the begining of the early morning Tarpon bite "+
"bay area bridges and structures";
let aprMsg = "The month of April is often thought as the best fishing month of the year! Both the offshore and inshore bite "+
"is HOT.  Snook and Redfish are all over the flats in all sizes, Trout are plentiful right off the flats.  Grouper, Snapper "+
"Mackerel are biting a few miles off shore.";
let mayMsg = "The month of May is also known as the begining of Tarpon Season.  Tarpon are typically begining their "+
"migration this time of year.  They flood into the bay, local passes, and along bay beaches.  Snook are also begining to "+
"spawn this time of year which allows for a big one.  There are plenty of Trout on the deep grass edges, and the Redfish "+
"can be found in large schools on the flats.";
let junMsg = "The month of June is still great for Tarpon fishing.  The schools can be massive this month.  The Snook "+
"are still spawning, Redfish are still plentiful on the flats and Trout can be caught in the hundreds.  Snapper are "+
"thick in the bay.";
let julMsg = "The months of July and August are typically the slowest months of fishing.  Sunscreen and shade are a necessity "+
"Snook, Redfish and Trout can still be caught on or near the flats, but the bite can vary.  Tarpon can still be seen around "+
"the bridges or on the beaches, can be really slow. The Grouper and Snapper are typically offshore in deeper water.";
let augMsg = "The months of July and August are typically the slowest months of fishing.  Sunscreen and shade are necessity "+
"Snook, Redfish and Trout can still be caught on or near the flats, but the bite can vary.  Tarpon can still be seen around "+
"the bridges or on the beaches, can be really slow. The Grouper and Snapper are typically offshore in deeper water.";
let sepMsg = "The month of September is still really hot.  Much like August, Snook, Redfish, and Trout can be found near or "+
"on the flats, but the bite can be slow.  The Grouper and Snapper are typically offshore in deeper water.";
let waterClean = "When the water is clear, be very mindful of getting close to fish in shallow water.  A lot of fish, "+
"especially Snook and Redfish are very shy.  Make long casts and stay quiet. The use of a push pole or trolling motor is a must. "+
"Use neutral colors for artificials like whites, and yellows"
let waterMedium ="When the water is medium, you could possibly get a little closer than clean water in shallow water, but still want to make "+
"long casts.  Be aware of the vibrations on the boat.  Walk quietly and use a push pole or trolling motor.  When using "+
"artificials, medium colors perform the best. Use a dark yellow or light brown."
let waterDirty = "When the water is dirty, you are safe visually in shallow water, BUT be aware of boat vibrations. "+
"It is still reccomended to use a trolling motor or push pole if avaliable.  If using artificals, use dark colors like "+
"dark browns even blacks."
let windHeavy = "When the wind is heavy (12+ kts), stay close to shore and be weary of anchoring.  If anchoring, use a lot more "+
"line to hold in position.  If possible, find a leeward side of a point or island."
let windMedium = "When the wind is medium (07-12 kts), fishing can be great.  The wind causes enough disturbaces on the water "+
"to help mask your presence.  Just be aware of the direction of the current verses the wind direction."
let windLight = "When the wind is light (0-06 kts), be aware your presence as you will be more noticeble to the fish."
let newMoon = "A new moon dosen't mean better fishing, it means higher tides which allows you to get to places to catch "+
"hiding fish which normally you don't have access to.  Be aware of the tide dropping for your exit or you might be camping for awhile."
let fullMoon = "A full moon doesn't really affect a fish's appetite, but it affects most of the fish's food, causing them "+
"to get more active which in turn..... causes the fish to become more active.  Some of the best fishing is done during this "+
"time.  Just be aware the day after the full moon, the fish always seem to be fully fed and are less active."
let halfMoon = "A half moon has the easiest tides.  Fishing typically won't be as good, but you can still have sucessful days "+
"without the fight of a strong tide.";
let dayTime = "The advantages of fishing during the daytime are better vision, sight fishing, and all around a safer experience "+
"The disadvantages are crowds, possible heat and/or sunburn." 
let nightTime = "Fishing at night is believed to have the best fishing.  Barring the full moon phase, this hasn't really been proven by "+
"by science.  Many believe becasue of the lack of other boaters and less fishing pressure, your odds of catching increases.  The "+
"obvious disadvanges are decreased vision and the added dangers that go along with it. If you're not familiar with the area or have "+
"litte boating experience, stay off the water at night.";
let highTide = "During the tidal shift, the current increases causing bait to move or get flushed.  This in turn, causes fish to feed "+
"The main advantage of a hightide, is access to shallow water that wasn't available before.  When new ground becomes available, small bait "+
"like shrimp and fish enter the new area to feed.  You can bet the game fish will be sure to follow.  When fishing a structure like a bridge, "+
"it's best to fish the flushing side, facing into the current.  Aim for a solid structure like a piling where the fish are waiting to ambush "+
"the drifting baits."
let lowTide = "During the tidal shift, the current increases causing bait to move or get flushed.  This in turn, causes fish to feed "+
"The main advantage of a lowtide, is bait getting forced out of safe, secure areas like the mangroves.  You will often find Snook or "+
"Redfish waiting by the edge of the mangroves ready to ambush bait. Another advantage is the pooling of fish.  This means the fish "+
"get concentrated in the deep areas of the flats also known as holes."  

//function that returns the selected wind information

const windValue = () => {
  let x = document.getElementById("myRange_1");
  let num = x.value;
  
  if (num <= 3) {
    return document.getElementById("text").innerHTML = windLight;
  } else if (num >= 4 && num <= 7) {
    return document.getElementById("text").innerHTML = windMedium;  
  } else {
    return document.getElementById("text").innerHTML = windHeavy;
  }
}

//the click event that triggers the display for wind information

wind.onclick = windValue;

//function that returns the selected water clairty information

const waterClairty = () => {
  let x = document.getElementById("myRange_2");
  let num = x.value;
  
  if (num <= 3) {
    return document.getElementById("text_2").innerHTML = waterClean;
  } else if (num >= 4 && num <= 7) {
    return document.getElementById("text_2").innerHTML = waterMedium;  
  } else {
    return document.getElementById("text_2").innerHTML = waterDirty;
  }
}

//the click event that triggers the display for the water clairty information

water.onclick = waterClairty;

//function that returns the selected moon phase information

const moonPhase = () => {
  let x = document.getElementById("myRange_3");
  let num = x.value;
  
  if (num <= 3) {
    return document.getElementById("text_3").innerHTML = newMoon;
  } else if (num >= 4 && num <= 7) {
    return document.getElementById("text_3").innerHTML = halfMoon;  
  } else {
    return document.getElementById("text_3").innerHTML = fullMoon;
  }
}

//the click event that triggers the display for moon phase information

moon.onclick = moonPhase;

//function that returns the selected day or night information

const dayNight = () => {

  if(document.getElementById("day").checked){
      document.getElementById("day-nightResults").innerHTML = dayTime;
  
  }else if(document.getElementById("night").checked){
      document.getElementById("day-nightResults").innerHTML = nightTime;
  } 
}

//the click event that triggers the display for day or night information

day.onclick = dayNight;

//function that returns the selected tide information

const tideCheck = () => {

  if(document.getElementById("incoming").checked){
      document.getElementById("tideResults").innerHTML = highTide;
  
  }else if(document.getElementById("outgoing").checked){
      document.getElementById("tideResults").innerHTML = lowTide;
  }
}

//the click event that triggers the display for tidal information

tide.onclick = tideCheck;

//function that returns the selected month information

const getMonth = () => {
  let e = document.getElementById("month");
  let result = e.options[e.selectedIndex].text;
  
  if (result === "October") {
    document.getElementById("result").innerHTML = octMsg;
  } else if (result === "November") {
    document.getElementById("result").innerHTML = novMsg;
  } else if (result === "December") {
    document.getElementById("result").innerHTML = decMsg;
  }  else if (result === "January") {
    document.getElementById("result").innerHTML = janMsg;
  } else if (result === "February") {
    document.getElementById("result").innerHTML = febMsg;
  } else if (result === "March") {
    document.getElementById("result").innerHTML = marMsg;
  } else if (result === "April") {
    document.getElementById("result").innerHTML = aprMsg;  
  } else if (result === "May") {
    document.getElementById("result").innerHTML = mayMsg;
  } else if (result === "June") {
    document.getElementById("result").innerHTML = junMsg;
  } else if (result === "July") {
    document.getElementById("result").innerHTML = julMsg;
  } else if (result === "August") {
    document.getElementById("result").innerHTML = augMsg;
  } else if (result === "September") {
    document.getElementById("result").innerHTML = sepMsg;
  }
}

//the click event that triggers the display for month information

month.onclick = getMonth;