$(document).ready(function () {
  $("#calendar").evoCalendar({
    theme: "Midnight Blue",
    calendarEvents: [
      {
        id: "event1", // Event's ID (required)
        name: "YMCA YFC Honour Dinner Ceremony", // Event name (required)
        date: "June/10/2022", // Event date (required)
        description:
          "It was the first ever hybrid launch of the Youth for Change programme by the YMCA of Singapore. It included the return of their in-person event at YMCA of Singapore, and an online experience via livestream. The event was graced by Mr Eric Chua, Parliamentary Secretary of Ministry of Culture, Community and Youth and Ministry of Social and Family Development.",
        type: "event", // Event type (required)
        everyYear: false, // Same event every year (optional)
        color: "#ff0000",
      },
    ],
  });
});
