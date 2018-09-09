import { mount } from '@vue/test-utils'
import WeatherList from '../src/components/WeatherList.vue'

describe('WeatherList.vue',function(){
    
    it('contains list of weather data',function(){
        const wrapper = mount(WeatherList)
        expect(wrapper.classes('weatherList')).toEqual(true)
    })
})