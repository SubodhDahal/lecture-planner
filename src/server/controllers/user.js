import User from '../models/user'

import {formatResponse, formatError} from '../api'

class UserCtrl {
    getUserAddresses (req, res) {
        let query = User.findOne({})

        query.exec()
            .then(savedUser => {
                res.json(formatResponse(savedUser))
            })
            .catch(err => {
                res.status(400)
                res.json(formatError(err.message))
            })
    }

    setUserAddresses (req, res) {
        const user = new User({
          location: req.body.location,
          university: req.body.university,
        })

        user.save()
            .then(savedUser => {
                res.json(formatResponse({
                    message: 'User details saved successfully'
                }))
            })
            .catch(err => {
                res.status(400)
                res.json(formatError(err.message))
            })
    }
}

let userCtrl = new UserCtrl()
export default userCtrl
