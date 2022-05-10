// @ts-nocheck
/*
 * Copyright (C) 2022 Application Library Engineering Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fetch from '@system.fetch';
import item from '../../i18n/weather_api.json';

export default {

    fetchDate: function () {
        const date = new Date();
        this.date_d = (String(date.getDate()))
        this.date_m = (String(date.getMonth() + 1))
        const dayOfWeek = (date.getDay())
        const month = (date.getMonth())

        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.date_w = days[dayOfWeek];

        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.date_m = months[month];
    },
    fetchWeather: function () {
        var dataw = JSON.stringify(item);
        let weather_api_input = JSON.parse(dataw);
        let data;
        fetch.fetch({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + weather_api_input[0].latitude + "&lon=" + weather_api_input[0].longitude + "&appid=" + weather_api_input[0].api_key,
            responseType: "json",
            method: 'GET',
            success: function (resp) {
                data = JSON.stringify(resp);
                console.info('Weather data fetch success. Resp: ' + data);
            },
            fail: function (data, code) {
                console.log("fail data: " + JSON.stringify(data) + " fail code: " + code);
            },
            complete: () => {
                const { main } = data.weather[0];
                this.weather = main;
                this.weather_description = main;
            }
        })
    },

    onInit() {
        this.fetchWeather();
        this.fetchDate();
    },
}


