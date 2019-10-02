import { get, cloneDeep, set, unset } from 'lodash'

export default {
  data() {
    return {
      db: JSON.parse(window.localStorage.getItem('$db')) || {}
    }
  },
  methods: {
    $db(...args) {
      if (this === this.$root) {
        if (args.length === 1) {
          return get(this.db, args[0], undefined)
        } else if (args.length === 2) {
          const db = cloneDeep(this.db)
          if (args[1] === null) {
            unset(db, args[0])
          } else {
            set(db, args[0], args[1])
          }
          this.db = db
          window.localStorage.setItem('$db', JSON.stringify(db))
        } else {
          throw new Error('$db() required one or two parameters.')
        }
      } else {
        return this.$root.$db(...args)
      }
    }
  }
}
