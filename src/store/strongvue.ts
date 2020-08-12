import Vue, { VueConstructor } from 'vue'
import { Store } from 'vuex'
import { State } from '.'

abstract class StrongVueClass extends Vue {
    public $store!: Store<State>;
}
const StrongVue = Vue as VueConstructor<StrongVueClass>

export default StrongVue
