import nahScraper from './nahScraper'

class ScrapeCtrl {
    getRoutePlan (req, res) {
        nahScraper.getRoutePlan()
            .then(response => {
                console.log(response)
                res.send(response)
            })

    }

    locationSuggestions (keyword, res) {
        nahScraper.locationSuggestions(keyword)
    }
}

let scrapeCtrl = new ScrapeCtrl()
export default scrapeCtrl