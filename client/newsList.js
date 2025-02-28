let previousNews = [];

function updateNews(data) {
    //look for the top headline
    let newsTable = document.getElementById("news").children[1];
    if (previousNews.length === 0) {
        //fully populate table
        previousNews = newsTable;
    }
    else {
        let lastKnownHeadlineId = previousNews[0];
    }
}