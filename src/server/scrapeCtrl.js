import nahScraper from './nahScraper'
import {formatResponse, formatError} from './api'

class ScrapeCtrl {
    getRoutePlan (req, res) {
        let {from, destination, date, time} = req.body

        nahScraper.getRoutePlan(from, destination, date, time)
            .then(response => {
                res.send(formatResponse(response))
            })
            .catch(error => {
                res.json(formatError(error))
            })

    }

    locationSuggestions (req, res) {
        nahScraper.locationSuggestions(keyword)
    }
}

let scrapeCtrl = new ScrapeCtrl()
export default scrapeCtrl