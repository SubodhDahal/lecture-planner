import React from 'react'
import { connect } from 'react-redux'
import Downshift from 'downshift'

import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import {
    setSourceAddress
} from '../store/actions'

const suggestions = [
  { value: 'Kiel Hbf' },
  { value: 'Kiel Hauptbahnhof' },
  { value: 'Kiel HDW' },
  { value: 'Kiel IPN' },
  { value: 'Kiel TÜV' },
  { value: 'Kiel Kaistraße' },
  { value: 'Kiel IKEA' },
  { value: 'Kiel ZOB' },
  { value: 'Kiel-Russee' },
  { value: 'Kiel Auberg' },
  { value: 'Kiel plaza' },
  { value: 'Kiel Im Saal' }
]

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  inputRoot: {
    flexWrap: 'wrap',
  }
})

@connect()
class UserLocationSelect extends React.Component {
    constructor (props) {
        super(props)
        this._handleSourceAddressChange = selection => props.dispatch(setSourceAddress(selection))
    }

    render () {
        const { classes } = this.props

        return <Downshift
            id="downshift-simple"
            onChange={this._handleSourceAddressChange}
        >
            {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
              <div className={classes.container}>
                {this._renderInput({
                  fullWidth: true,
                  classes,
                  InputProps: getInputProps({
                    placeholder: 'Search your location',
                  }),
                })}
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {this._getSuggestions(inputValue).map((suggestion, index) =>
                      this._renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.value }),
                        highlightedIndex,
                        selectedItem,
                      }),
                    )}
                  </Paper>
                ) : null}
              </div>
            )}
        </Downshift>
    }

    _renderInput (inputProps) {
      const { InputProps, classes, ref, ...other } = inputProps

      return (
        <TextField
          InputProps={{
            inputRef: ref,
            classes: {
              root: classes.inputRoot,
            },
            ...InputProps,
          }}
          {...other}
        />
      )
    }

    _renderSuggestion ({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
      const isHighlighted = highlightedIndex === index
      const isSelected = (selectedItem || '').indexOf(suggestion.value) > -1

      return (
        <MenuItem
          {...itemProps}
          key={suggestion.value}
          selected={isHighlighted}
          component="div"
          style={{
            fontWeight: isSelected ? 500 : 400,
          }}
        >
          {suggestion.value}
        </MenuItem>
      )
    }

    _getSuggestions (inputValue) {
      let count = 0

      return suggestions.filter(suggestion => {
        const keep =
          (!inputValue || suggestion.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
          count < 5

        if (keep) {
          count += 1
        }

        return keep
      })
    }
}

export default withStyles(styles)(UserLocationSelect)
