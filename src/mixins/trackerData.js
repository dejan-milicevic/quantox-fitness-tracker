import {getData} from '@/api/fitness_tracker'

export default {
  data() {
    return {
      distancePerStep: 0.762,
      caloriesPerStep: 0.05,
      secondsPerStep: 0.5,
      weeklyData: null,
      averageTimeSpent: '',
      totalSteps: '',
      totalCalories: ''
    }
  },

  methods: {
    getData() {
      return getData().then(({data}) => {
        const result = {}
        let totalSecondsSpent = 0
        let totalSteps = 0

        data.forEach((el) => {
          const date = new Date(el.timestamp)
          const year = date.getFullYear()
          const month = ('0' + (date.getMonth() + 1)).slice(-2)
          const day = ('0' + date.getDate()).slice(-2)
          const dayOfWeek = date.getDay()
          const dayOfWeekTitle = date.toString().slice(0, 3).toLowerCase()
          const prop = dayOfWeek + '-' + dayOfWeekTitle + '-' + year + '-' + month + '-' + day
          const secondsSpent = el.steps * this.secondsPerStep

          totalSecondsSpent += secondsSpent
          totalSteps += el.steps

          if (!result[prop]) {
            result[prop] = {
              data: [el],
              date: date,
              totalSteps: el.steps
            }
          } else {
            result[prop].data.push(el)
            result[prop].totalSteps += el.steps
          }
        })

        this.weeklyData = result
        this.averageTimeSpent = `${Math.round(totalSecondsSpent / 60 / 5)}min`
        this.totalSteps = totalSteps.toString().split('').reverse().join('').match(/.{1,3}/g).join(',').split('').reverse().join('')
        this.totalCalories = Math.round(totalSteps * this.caloriesPerStep).toString()
      })
      .catch((error) => {console.log(error)})
    }
  },

  mounted() {
    this.getData()
  }
}