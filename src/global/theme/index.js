import mqAPI from 'cssapi-mq'
const mq = mqAPI({
  width: {
    sm: 768,
    md: 1024,
    lg: 1440
  }
})

const { query, mediaType, aboveWidth } = mq

const aboveSmQuery = query([mediaType(), aboveWidth('sm')])
const aboveMdQuery = query([mediaType(), aboveWidth('md')])
const aboveLgQuery = query([mediaType(), aboveWidth('lg')])

const theme = {
  queries: {
    sm: aboveSmQuery,
    md: aboveMdQuery,
    lg: aboveLgQuery
  },
  white: '#FFFFFF',
  pink1: '#FFF9F9',
  grey0: '#F2F2F2',
  grey1: '#E1E1E1',
  grey2: '#D6D6D6',
  grey3: '#A4A4A4',
  grey4: '#707070',
  grey5: '#444444',
  grey6: '#2E2E2E',
  grey7: '#242424',
  dark1: '#010C1D',
  dark2: '#101010',
  dark3: '#1A1818',
  black: '#000000',
  blue1: '#022358',
  blue2: '#12479D',
  awesomegrid: {
    columns: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 12,
      xl: 12
    },
    gutterWidth: {
      xs: 1,
      sm: 1,
      md: 1,
      lg: 1,
      xl: 1
    },
    container: {
      xs: 20.875,
      sm: 40,
      md: 68,
      lg: 90,
      xl: 90
    }
  }
}

export default theme
