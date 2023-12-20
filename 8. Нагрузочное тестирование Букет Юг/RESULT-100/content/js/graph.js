/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1508.0, "minX": 0.0, "maxY": 4443.0, "series": [{"data": [[0.0, 1508.0], [0.1, 1508.0], [0.2, 1508.0], [0.3, 1508.0], [0.4, 1508.0], [0.5, 1508.0], [0.6, 1508.0], [0.7, 1508.0], [0.8, 1508.0], [0.9, 1508.0], [1.0, 2067.0], [1.1, 2067.0], [1.2, 2067.0], [1.3, 2067.0], [1.4, 2067.0], [1.5, 2067.0], [1.6, 2067.0], [1.7, 2067.0], [1.8, 2067.0], [1.9, 2067.0], [2.0, 2087.0], [2.1, 2087.0], [2.2, 2087.0], [2.3, 2087.0], [2.4, 2087.0], [2.5, 2087.0], [2.6, 2087.0], [2.7, 2087.0], [2.8, 2087.0], [2.9, 2087.0], [3.0, 2100.0], [3.1, 2100.0], [3.2, 2100.0], [3.3, 2100.0], [3.4, 2100.0], [3.5, 2100.0], [3.6, 2100.0], [3.7, 2100.0], [3.8, 2100.0], [3.9, 2100.0], [4.0, 2164.0], [4.1, 2164.0], [4.2, 2164.0], [4.3, 2164.0], [4.4, 2164.0], [4.5, 2164.0], [4.6, 2164.0], [4.7, 2164.0], [4.8, 2164.0], [4.9, 2164.0], [5.0, 2196.0], [5.1, 2196.0], [5.2, 2196.0], [5.3, 2196.0], [5.4, 2196.0], [5.5, 2196.0], [5.6, 2196.0], [5.7, 2196.0], [5.8, 2196.0], [5.9, 2196.0], [6.0, 2203.0], [6.1, 2203.0], [6.2, 2203.0], [6.3, 2203.0], [6.4, 2203.0], [6.5, 2203.0], [6.6, 2203.0], [6.7, 2203.0], [6.8, 2203.0], [6.9, 2203.0], [7.0, 2207.0], [7.1, 2207.0], [7.2, 2207.0], [7.3, 2207.0], [7.4, 2207.0], [7.5, 2207.0], [7.6, 2207.0], [7.7, 2207.0], [7.8, 2207.0], [7.9, 2207.0], [8.0, 2211.0], [8.1, 2211.0], [8.2, 2211.0], [8.3, 2211.0], [8.4, 2211.0], [8.5, 2211.0], [8.6, 2211.0], [8.7, 2211.0], [8.8, 2211.0], [8.9, 2211.0], [9.0, 2225.0], [9.1, 2225.0], [9.2, 2225.0], [9.3, 2225.0], [9.4, 2225.0], [9.5, 2225.0], [9.6, 2225.0], [9.7, 2225.0], [9.8, 2225.0], [9.9, 2225.0], [10.0, 2225.0], [10.1, 2225.0], [10.2, 2225.0], [10.3, 2225.0], [10.4, 2225.0], [10.5, 2225.0], [10.6, 2225.0], [10.7, 2225.0], [10.8, 2225.0], [10.9, 2225.0], [11.0, 2260.0], [11.1, 2260.0], [11.2, 2260.0], [11.3, 2260.0], [11.4, 2260.0], [11.5, 2260.0], [11.6, 2260.0], [11.7, 2260.0], [11.8, 2260.0], [11.9, 2260.0], [12.0, 2269.0], [12.1, 2269.0], [12.2, 2269.0], [12.3, 2269.0], [12.4, 2269.0], [12.5, 2269.0], [12.6, 2269.0], [12.7, 2269.0], [12.8, 2269.0], [12.9, 2269.0], [13.0, 2287.0], [13.1, 2287.0], [13.2, 2287.0], [13.3, 2287.0], [13.4, 2287.0], [13.5, 2287.0], [13.6, 2287.0], [13.7, 2287.0], [13.8, 2287.0], [13.9, 2287.0], [14.0, 2296.0], [14.1, 2296.0], [14.2, 2296.0], [14.3, 2296.0], [14.4, 2296.0], [14.5, 2296.0], [14.6, 2296.0], [14.7, 2296.0], [14.8, 2296.0], [14.9, 2296.0], [15.0, 2297.0], [15.1, 2297.0], [15.2, 2297.0], [15.3, 2297.0], [15.4, 2297.0], [15.5, 2297.0], [15.6, 2297.0], [15.7, 2297.0], [15.8, 2297.0], [15.9, 2297.0], [16.0, 2300.0], [16.1, 2300.0], [16.2, 2300.0], [16.3, 2300.0], [16.4, 2300.0], [16.5, 2300.0], [16.6, 2300.0], [16.7, 2300.0], [16.8, 2300.0], [16.9, 2300.0], [17.0, 2301.0], [17.1, 2301.0], [17.2, 2301.0], [17.3, 2301.0], [17.4, 2301.0], [17.5, 2301.0], [17.6, 2301.0], [17.7, 2301.0], [17.8, 2301.0], [17.9, 2301.0], [18.0, 2301.0], [18.1, 2301.0], [18.2, 2301.0], [18.3, 2301.0], [18.4, 2301.0], [18.5, 2301.0], [18.6, 2301.0], [18.7, 2301.0], [18.8, 2301.0], [18.9, 2301.0], [19.0, 2308.0], [19.1, 2308.0], [19.2, 2308.0], [19.3, 2308.0], [19.4, 2308.0], [19.5, 2308.0], [19.6, 2308.0], [19.7, 2308.0], [19.8, 2308.0], [19.9, 2308.0], [20.0, 2310.0], [20.1, 2310.0], [20.2, 2310.0], [20.3, 2310.0], [20.4, 2310.0], [20.5, 2310.0], [20.6, 2310.0], [20.7, 2310.0], [20.8, 2310.0], [20.9, 2310.0], [21.0, 2321.0], [21.1, 2321.0], [21.2, 2321.0], [21.3, 2321.0], [21.4, 2321.0], [21.5, 2321.0], [21.6, 2321.0], [21.7, 2321.0], [21.8, 2321.0], [21.9, 2321.0], [22.0, 2326.0], [22.1, 2326.0], [22.2, 2326.0], [22.3, 2326.0], [22.4, 2326.0], [22.5, 2326.0], [22.6, 2326.0], [22.7, 2326.0], [22.8, 2326.0], [22.9, 2326.0], [23.0, 2355.0], [23.1, 2355.0], [23.2, 2355.0], [23.3, 2355.0], [23.4, 2355.0], [23.5, 2355.0], [23.6, 2355.0], [23.7, 2355.0], [23.8, 2355.0], [23.9, 2355.0], [24.0, 2358.0], [24.1, 2358.0], [24.2, 2358.0], [24.3, 2358.0], [24.4, 2358.0], [24.5, 2358.0], [24.6, 2358.0], [24.7, 2358.0], [24.8, 2358.0], [24.9, 2358.0], [25.0, 2389.0], [25.1, 2389.0], [25.2, 2389.0], [25.3, 2389.0], [25.4, 2389.0], [25.5, 2389.0], [25.6, 2389.0], [25.7, 2389.0], [25.8, 2389.0], [25.9, 2389.0], [26.0, 2395.0], [26.1, 2395.0], [26.2, 2395.0], [26.3, 2395.0], [26.4, 2395.0], [26.5, 2395.0], [26.6, 2395.0], [26.7, 2395.0], [26.8, 2395.0], [26.9, 2395.0], [27.0, 2397.0], [27.1, 2397.0], [27.2, 2397.0], [27.3, 2397.0], [27.4, 2397.0], [27.5, 2397.0], [27.6, 2397.0], [27.7, 2397.0], [27.8, 2397.0], [27.9, 2397.0], [28.0, 2412.0], [28.1, 2412.0], [28.2, 2412.0], [28.3, 2412.0], [28.4, 2412.0], [28.5, 2412.0], [28.6, 2412.0], [28.7, 2412.0], [28.8, 2412.0], [28.9, 2412.0], [29.0, 2421.0], [29.1, 2421.0], [29.2, 2421.0], [29.3, 2421.0], [29.4, 2421.0], [29.5, 2421.0], [29.6, 2421.0], [29.7, 2421.0], [29.8, 2421.0], [29.9, 2421.0], [30.0, 2435.0], [30.1, 2435.0], [30.2, 2435.0], [30.3, 2435.0], [30.4, 2435.0], [30.5, 2435.0], [30.6, 2435.0], [30.7, 2435.0], [30.8, 2435.0], [30.9, 2435.0], [31.0, 2438.0], [31.1, 2438.0], [31.2, 2438.0], [31.3, 2438.0], [31.4, 2438.0], [31.5, 2438.0], [31.6, 2438.0], [31.7, 2438.0], [31.8, 2438.0], [31.9, 2438.0], [32.0, 2440.0], [32.1, 2440.0], [32.2, 2440.0], [32.3, 2440.0], [32.4, 2440.0], [32.5, 2440.0], [32.6, 2440.0], [32.7, 2440.0], [32.8, 2440.0], [32.9, 2440.0], [33.0, 2461.0], [33.1, 2461.0], [33.2, 2461.0], [33.3, 2461.0], [33.4, 2461.0], [33.5, 2461.0], [33.6, 2461.0], [33.7, 2461.0], [33.8, 2461.0], [33.9, 2461.0], [34.0, 2469.0], [34.1, 2469.0], [34.2, 2469.0], [34.3, 2469.0], [34.4, 2469.0], [34.5, 2469.0], [34.6, 2469.0], [34.7, 2469.0], [34.8, 2469.0], [34.9, 2469.0], [35.0, 2476.0], [35.1, 2476.0], [35.2, 2476.0], [35.3, 2476.0], [35.4, 2476.0], [35.5, 2476.0], [35.6, 2476.0], [35.7, 2476.0], [35.8, 2476.0], [35.9, 2476.0], [36.0, 2498.0], [36.1, 2498.0], [36.2, 2498.0], [36.3, 2498.0], [36.4, 2498.0], [36.5, 2498.0], [36.6, 2498.0], [36.7, 2498.0], [36.8, 2498.0], [36.9, 2498.0], [37.0, 2524.0], [37.1, 2524.0], [37.2, 2524.0], [37.3, 2524.0], [37.4, 2524.0], [37.5, 2524.0], [37.6, 2524.0], [37.7, 2524.0], [37.8, 2524.0], [37.9, 2524.0], [38.0, 2524.0], [38.1, 2524.0], [38.2, 2524.0], [38.3, 2524.0], [38.4, 2524.0], [38.5, 2524.0], [38.6, 2524.0], [38.7, 2524.0], [38.8, 2524.0], [38.9, 2524.0], [39.0, 2541.0], [39.1, 2541.0], [39.2, 2541.0], [39.3, 2541.0], [39.4, 2541.0], [39.5, 2541.0], [39.6, 2541.0], [39.7, 2541.0], [39.8, 2541.0], [39.9, 2541.0], [40.0, 2568.0], [40.1, 2568.0], [40.2, 2568.0], [40.3, 2568.0], [40.4, 2568.0], [40.5, 2568.0], [40.6, 2568.0], [40.7, 2568.0], [40.8, 2568.0], [40.9, 2568.0], [41.0, 2579.0], [41.1, 2579.0], [41.2, 2579.0], [41.3, 2579.0], [41.4, 2579.0], [41.5, 2579.0], [41.6, 2579.0], [41.7, 2579.0], [41.8, 2579.0], [41.9, 2579.0], [42.0, 2599.0], [42.1, 2599.0], [42.2, 2599.0], [42.3, 2599.0], [42.4, 2599.0], [42.5, 2599.0], [42.6, 2599.0], [42.7, 2599.0], [42.8, 2599.0], [42.9, 2599.0], [43.0, 2616.0], [43.1, 2616.0], [43.2, 2616.0], [43.3, 2616.0], [43.4, 2616.0], [43.5, 2616.0], [43.6, 2616.0], [43.7, 2616.0], [43.8, 2616.0], [43.9, 2616.0], [44.0, 2685.0], [44.1, 2685.0], [44.2, 2685.0], [44.3, 2685.0], [44.4, 2685.0], [44.5, 2685.0], [44.6, 2685.0], [44.7, 2685.0], [44.8, 2685.0], [44.9, 2685.0], [45.0, 2704.0], [45.1, 2704.0], [45.2, 2704.0], [45.3, 2704.0], [45.4, 2704.0], [45.5, 2704.0], [45.6, 2704.0], [45.7, 2704.0], [45.8, 2704.0], [45.9, 2704.0], [46.0, 2716.0], [46.1, 2716.0], [46.2, 2716.0], [46.3, 2716.0], [46.4, 2716.0], [46.5, 2716.0], [46.6, 2716.0], [46.7, 2716.0], [46.8, 2716.0], [46.9, 2716.0], [47.0, 2719.0], [47.1, 2719.0], [47.2, 2719.0], [47.3, 2719.0], [47.4, 2719.0], [47.5, 2719.0], [47.6, 2719.0], [47.7, 2719.0], [47.8, 2719.0], [47.9, 2719.0], [48.0, 2727.0], [48.1, 2727.0], [48.2, 2727.0], [48.3, 2727.0], [48.4, 2727.0], [48.5, 2727.0], [48.6, 2727.0], [48.7, 2727.0], [48.8, 2727.0], [48.9, 2727.0], [49.0, 2770.0], [49.1, 2770.0], [49.2, 2770.0], [49.3, 2770.0], [49.4, 2770.0], [49.5, 2770.0], [49.6, 2770.0], [49.7, 2770.0], [49.8, 2770.0], [49.9, 2770.0], [50.0, 2797.0], [50.1, 2797.0], [50.2, 2797.0], [50.3, 2797.0], [50.4, 2797.0], [50.5, 2797.0], [50.6, 2797.0], [50.7, 2797.0], [50.8, 2797.0], [50.9, 2797.0], [51.0, 2825.0], [51.1, 2825.0], [51.2, 2825.0], [51.3, 2825.0], [51.4, 2825.0], [51.5, 2825.0], [51.6, 2825.0], [51.7, 2825.0], [51.8, 2825.0], [51.9, 2825.0], [52.0, 2832.0], [52.1, 2832.0], [52.2, 2832.0], [52.3, 2832.0], [52.4, 2832.0], [52.5, 2832.0], [52.6, 2832.0], [52.7, 2832.0], [52.8, 2832.0], [52.9, 2832.0], [53.0, 2871.0], [53.1, 2871.0], [53.2, 2871.0], [53.3, 2871.0], [53.4, 2871.0], [53.5, 2871.0], [53.6, 2871.0], [53.7, 2871.0], [53.8, 2871.0], [53.9, 2871.0], [54.0, 3008.0], [54.1, 3008.0], [54.2, 3008.0], [54.3, 3008.0], [54.4, 3008.0], [54.5, 3008.0], [54.6, 3008.0], [54.7, 3008.0], [54.8, 3008.0], [54.9, 3008.0], [55.0, 3038.0], [55.1, 3038.0], [55.2, 3038.0], [55.3, 3038.0], [55.4, 3038.0], [55.5, 3038.0], [55.6, 3038.0], [55.7, 3038.0], [55.8, 3038.0], [55.9, 3038.0], [56.0, 3039.0], [56.1, 3039.0], [56.2, 3039.0], [56.3, 3039.0], [56.4, 3039.0], [56.5, 3039.0], [56.6, 3039.0], [56.7, 3039.0], [56.8, 3039.0], [56.9, 3039.0], [57.0, 3054.0], [57.1, 3054.0], [57.2, 3054.0], [57.3, 3054.0], [57.4, 3054.0], [57.5, 3054.0], [57.6, 3054.0], [57.7, 3054.0], [57.8, 3054.0], [57.9, 3054.0], [58.0, 3104.0], [58.1, 3104.0], [58.2, 3104.0], [58.3, 3104.0], [58.4, 3104.0], [58.5, 3104.0], [58.6, 3104.0], [58.7, 3104.0], [58.8, 3104.0], [58.9, 3104.0], [59.0, 3109.0], [59.1, 3109.0], [59.2, 3109.0], [59.3, 3109.0], [59.4, 3109.0], [59.5, 3109.0], [59.6, 3109.0], [59.7, 3109.0], [59.8, 3109.0], [59.9, 3109.0], [60.0, 3133.0], [60.1, 3133.0], [60.2, 3133.0], [60.3, 3133.0], [60.4, 3133.0], [60.5, 3133.0], [60.6, 3133.0], [60.7, 3133.0], [60.8, 3133.0], [60.9, 3133.0], [61.0, 3139.0], [61.1, 3139.0], [61.2, 3139.0], [61.3, 3139.0], [61.4, 3139.0], [61.5, 3139.0], [61.6, 3139.0], [61.7, 3139.0], [61.8, 3139.0], [61.9, 3139.0], [62.0, 3140.0], [62.1, 3140.0], [62.2, 3140.0], [62.3, 3140.0], [62.4, 3140.0], [62.5, 3140.0], [62.6, 3140.0], [62.7, 3140.0], [62.8, 3140.0], [62.9, 3140.0], [63.0, 3145.0], [63.1, 3145.0], [63.2, 3145.0], [63.3, 3145.0], [63.4, 3145.0], [63.5, 3145.0], [63.6, 3145.0], [63.7, 3145.0], [63.8, 3145.0], [63.9, 3145.0], [64.0, 3292.0], [64.1, 3292.0], [64.2, 3292.0], [64.3, 3292.0], [64.4, 3292.0], [64.5, 3292.0], [64.6, 3292.0], [64.7, 3292.0], [64.8, 3292.0], [64.9, 3292.0], [65.0, 3320.0], [65.1, 3320.0], [65.2, 3320.0], [65.3, 3320.0], [65.4, 3320.0], [65.5, 3320.0], [65.6, 3320.0], [65.7, 3320.0], [65.8, 3320.0], [65.9, 3320.0], [66.0, 3388.0], [66.1, 3388.0], [66.2, 3388.0], [66.3, 3388.0], [66.4, 3388.0], [66.5, 3388.0], [66.6, 3388.0], [66.7, 3388.0], [66.8, 3388.0], [66.9, 3388.0], [67.0, 3397.0], [67.1, 3397.0], [67.2, 3397.0], [67.3, 3397.0], [67.4, 3397.0], [67.5, 3397.0], [67.6, 3397.0], [67.7, 3397.0], [67.8, 3397.0], [67.9, 3397.0], [68.0, 3403.0], [68.1, 3403.0], [68.2, 3403.0], [68.3, 3403.0], [68.4, 3403.0], [68.5, 3403.0], [68.6, 3403.0], [68.7, 3403.0], [68.8, 3403.0], [68.9, 3403.0], [69.0, 3407.0], [69.1, 3407.0], [69.2, 3407.0], [69.3, 3407.0], [69.4, 3407.0], [69.5, 3407.0], [69.6, 3407.0], [69.7, 3407.0], [69.8, 3407.0], [69.9, 3407.0], [70.0, 3413.0], [70.1, 3413.0], [70.2, 3413.0], [70.3, 3413.0], [70.4, 3413.0], [70.5, 3413.0], [70.6, 3413.0], [70.7, 3413.0], [70.8, 3413.0], [70.9, 3413.0], [71.0, 3415.0], [71.1, 3415.0], [71.2, 3415.0], [71.3, 3415.0], [71.4, 3415.0], [71.5, 3415.0], [71.6, 3415.0], [71.7, 3415.0], [71.8, 3415.0], [71.9, 3415.0], [72.0, 3422.0], [72.1, 3422.0], [72.2, 3422.0], [72.3, 3422.0], [72.4, 3422.0], [72.5, 3422.0], [72.6, 3422.0], [72.7, 3422.0], [72.8, 3422.0], [72.9, 3422.0], [73.0, 3453.0], [73.1, 3453.0], [73.2, 3453.0], [73.3, 3453.0], [73.4, 3453.0], [73.5, 3453.0], [73.6, 3453.0], [73.7, 3453.0], [73.8, 3453.0], [73.9, 3453.0], [74.0, 3454.0], [74.1, 3454.0], [74.2, 3454.0], [74.3, 3454.0], [74.4, 3454.0], [74.5, 3454.0], [74.6, 3454.0], [74.7, 3454.0], [74.8, 3454.0], [74.9, 3454.0], [75.0, 3466.0], [75.1, 3466.0], [75.2, 3466.0], [75.3, 3466.0], [75.4, 3466.0], [75.5, 3466.0], [75.6, 3466.0], [75.7, 3466.0], [75.8, 3466.0], [75.9, 3466.0], [76.0, 3470.0], [76.1, 3470.0], [76.2, 3470.0], [76.3, 3470.0], [76.4, 3470.0], [76.5, 3470.0], [76.6, 3470.0], [76.7, 3470.0], [76.8, 3470.0], [76.9, 3470.0], [77.0, 3485.0], [77.1, 3485.0], [77.2, 3485.0], [77.3, 3485.0], [77.4, 3485.0], [77.5, 3485.0], [77.6, 3485.0], [77.7, 3485.0], [77.8, 3485.0], [77.9, 3485.0], [78.0, 3516.0], [78.1, 3516.0], [78.2, 3516.0], [78.3, 3516.0], [78.4, 3516.0], [78.5, 3516.0], [78.6, 3516.0], [78.7, 3516.0], [78.8, 3516.0], [78.9, 3516.0], [79.0, 3569.0], [79.1, 3569.0], [79.2, 3569.0], [79.3, 3569.0], [79.4, 3569.0], [79.5, 3569.0], [79.6, 3569.0], [79.7, 3569.0], [79.8, 3569.0], [79.9, 3569.0], [80.0, 3570.0], [80.1, 3570.0], [80.2, 3570.0], [80.3, 3570.0], [80.4, 3570.0], [80.5, 3570.0], [80.6, 3570.0], [80.7, 3570.0], [80.8, 3570.0], [80.9, 3570.0], [81.0, 3608.0], [81.1, 3608.0], [81.2, 3608.0], [81.3, 3608.0], [81.4, 3608.0], [81.5, 3608.0], [81.6, 3608.0], [81.7, 3608.0], [81.8, 3608.0], [81.9, 3608.0], [82.0, 3647.0], [82.1, 3647.0], [82.2, 3647.0], [82.3, 3647.0], [82.4, 3647.0], [82.5, 3647.0], [82.6, 3647.0], [82.7, 3647.0], [82.8, 3647.0], [82.9, 3647.0], [83.0, 3654.0], [83.1, 3654.0], [83.2, 3654.0], [83.3, 3654.0], [83.4, 3654.0], [83.5, 3654.0], [83.6, 3654.0], [83.7, 3654.0], [83.8, 3654.0], [83.9, 3654.0], [84.0, 3672.0], [84.1, 3672.0], [84.2, 3672.0], [84.3, 3672.0], [84.4, 3672.0], [84.5, 3672.0], [84.6, 3672.0], [84.7, 3672.0], [84.8, 3672.0], [84.9, 3672.0], [85.0, 3708.0], [85.1, 3708.0], [85.2, 3708.0], [85.3, 3708.0], [85.4, 3708.0], [85.5, 3708.0], [85.6, 3708.0], [85.7, 3708.0], [85.8, 3708.0], [85.9, 3708.0], [86.0, 3722.0], [86.1, 3722.0], [86.2, 3722.0], [86.3, 3722.0], [86.4, 3722.0], [86.5, 3722.0], [86.6, 3722.0], [86.7, 3722.0], [86.8, 3722.0], [86.9, 3722.0], [87.0, 3733.0], [87.1, 3733.0], [87.2, 3733.0], [87.3, 3733.0], [87.4, 3733.0], [87.5, 3733.0], [87.6, 3733.0], [87.7, 3733.0], [87.8, 3733.0], [87.9, 3733.0], [88.0, 3973.0], [88.1, 3973.0], [88.2, 3973.0], [88.3, 3973.0], [88.4, 3973.0], [88.5, 3973.0], [88.6, 3973.0], [88.7, 3973.0], [88.8, 3973.0], [88.9, 3973.0], [89.0, 3976.0], [89.1, 3976.0], [89.2, 3976.0], [89.3, 3976.0], [89.4, 3976.0], [89.5, 3976.0], [89.6, 3976.0], [89.7, 3976.0], [89.8, 3976.0], [89.9, 3976.0], [90.0, 4007.0], [90.1, 4007.0], [90.2, 4007.0], [90.3, 4007.0], [90.4, 4007.0], [90.5, 4007.0], [90.6, 4007.0], [90.7, 4007.0], [90.8, 4007.0], [90.9, 4007.0], [91.0, 4040.0], [91.1, 4040.0], [91.2, 4040.0], [91.3, 4040.0], [91.4, 4040.0], [91.5, 4040.0], [91.6, 4040.0], [91.7, 4040.0], [91.8, 4040.0], [91.9, 4040.0], [92.0, 4043.0], [92.1, 4043.0], [92.2, 4043.0], [92.3, 4043.0], [92.4, 4043.0], [92.5, 4043.0], [92.6, 4043.0], [92.7, 4043.0], [92.8, 4043.0], [92.9, 4043.0], [93.0, 4054.0], [93.1, 4054.0], [93.2, 4054.0], [93.3, 4054.0], [93.4, 4054.0], [93.5, 4054.0], [93.6, 4054.0], [93.7, 4054.0], [93.8, 4054.0], [93.9, 4054.0], [94.0, 4066.0], [94.1, 4066.0], [94.2, 4066.0], [94.3, 4066.0], [94.4, 4066.0], [94.5, 4066.0], [94.6, 4066.0], [94.7, 4066.0], [94.8, 4066.0], [94.9, 4066.0], [95.0, 4159.0], [95.1, 4159.0], [95.2, 4159.0], [95.3, 4159.0], [95.4, 4159.0], [95.5, 4159.0], [95.6, 4159.0], [95.7, 4159.0], [95.8, 4159.0], [95.9, 4159.0], [96.0, 4192.0], [96.1, 4192.0], [96.2, 4192.0], [96.3, 4192.0], [96.4, 4192.0], [96.5, 4192.0], [96.6, 4192.0], [96.7, 4192.0], [96.8, 4192.0], [96.9, 4192.0], [97.0, 4352.0], [97.1, 4352.0], [97.2, 4352.0], [97.3, 4352.0], [97.4, 4352.0], [97.5, 4352.0], [97.6, 4352.0], [97.7, 4352.0], [97.8, 4352.0], [97.9, 4352.0], [98.0, 4429.0], [98.1, 4429.0], [98.2, 4429.0], [98.3, 4429.0], [98.4, 4429.0], [98.5, 4429.0], [98.6, 4429.0], [98.7, 4429.0], [98.8, 4429.0], [98.9, 4429.0], [99.0, 4443.0], [99.1, 4443.0], [99.2, 4443.0], [99.3, 4443.0], [99.4, 4443.0], [99.5, 4443.0], [99.6, 4443.0], [99.7, 4443.0], [99.8, 4443.0], [99.9, 4443.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1500.0, "maxY": 12.0, "series": [{"data": [[2100.0, 3.0], [2300.0, 12.0], [2200.0, 10.0], [2400.0, 9.0], [2500.0, 6.0], [2600.0, 2.0], [2800.0, 3.0], [2700.0, 6.0], [3000.0, 4.0], [3100.0, 6.0], [3300.0, 3.0], [3200.0, 1.0], [3400.0, 10.0], [3500.0, 3.0], [3600.0, 4.0], [3700.0, 3.0], [3900.0, 2.0], [4000.0, 5.0], [4100.0, 2.0], [4300.0, 1.0], [4400.0, 2.0], [1500.0, 1.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 50.549999999999976, "minX": 1.70298768E12, "maxY": 50.549999999999976, "series": [{"data": [[1.70298768E12, 50.549999999999976]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70298768E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2067.0, "minX": 1.0, "maxY": 4443.0, "series": [{"data": [[2.0, 3569.0], [3.0, 2164.0], [4.0, 2397.0], [5.0, 2211.0], [6.0, 2770.0], [7.0, 2225.0], [8.0, 2421.0], [9.0, 2260.0], [10.0, 2100.0], [11.0, 3415.0], [12.0, 3403.0], [13.0, 2440.0], [14.0, 2524.0], [15.0, 2196.0], [17.0, 2737.5], [18.0, 2269.0], [19.0, 2469.0], [20.0, 4352.0], [21.0, 2067.0], [23.0, 3381.0], [24.0, 3708.0], [26.0, 2527.0], [27.0, 2832.0], [28.0, 2207.0], [29.0, 2308.0], [30.0, 2203.0], [31.0, 3397.0], [33.0, 4159.0], [32.0, 2225.0], [35.0, 4443.0], [34.0, 2716.0], [37.0, 2498.0], [36.0, 2727.0], [39.0, 4429.0], [38.0, 2389.0], [41.0, 2395.0], [40.0, 2287.0], [43.0, 3054.0], [42.0, 3973.0], [45.0, 2541.0], [44.0, 2301.0], [47.0, 2685.0], [46.0, 3647.0], [49.0, 2461.0], [48.0, 2797.0], [51.0, 2358.0], [50.0, 3413.0], [53.0, 2412.0], [52.0, 3654.0], [55.0, 2599.0], [54.0, 3733.0], [57.0, 3104.0], [56.0, 4054.0], [59.0, 2954.5], [61.0, 4192.0], [60.0, 4040.0], [63.0, 2476.0], [62.0, 3109.0], [67.0, 2297.0], [66.0, 3402.5], [64.0, 3407.0], [71.0, 4007.0], [70.0, 3722.0], [69.0, 2435.0], [68.0, 4066.0], [75.0, 2704.0], [74.0, 3140.0], [73.0, 3976.0], [72.0, 3454.0], [79.0, 2310.0], [78.0, 3608.0], [77.0, 3292.0], [76.0, 2579.0], [83.0, 3466.0], [82.0, 2301.0], [81.0, 3008.0], [80.0, 2355.0], [86.0, 3277.5], [84.0, 3320.0], [91.0, 3570.0], [90.0, 3485.0], [89.0, 2825.0], [88.0, 3304.5], [95.0, 3422.0], [94.0, 2296.0], [93.0, 3453.0], [92.0, 2326.0], [98.0, 2326.5], [99.0, 2300.0], [97.0, 2321.0], [96.0, 2568.0], [1.0, 2524.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.549999999999976, 2951.370000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 99.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 193.33333333333334, "minX": 1.70298768E12, "maxY": 344283.3333333333, "series": [{"data": [[1.70298768E12, 344283.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70298768E12, 193.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70298768E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2951.370000000001, "minX": 1.70298768E12, "maxY": 2951.370000000001, "series": [{"data": [[1.70298768E12, 2951.370000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70298768E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1012.6700000000001, "minX": 1.70298768E12, "maxY": 1012.6700000000001, "series": [{"data": [[1.70298768E12, 1012.6700000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70298768E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 625.8400000000003, "minX": 1.70298768E12, "maxY": 625.8400000000003, "series": [{"data": [[1.70298768E12, 625.8400000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70298768E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1508.0, "minX": 1.70298768E12, "maxY": 4443.0, "series": [{"data": [[1.70298768E12, 4443.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70298768E12, 4003.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70298768E12, 4442.86]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70298768E12, 4154.3499999999985]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70298768E12, 1508.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70298768E12, 2783.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70298768E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1508.0, "minX": 1.0, "maxY": 3140.0, "series": [{"data": [[1.0, 1508.0], [33.0, 3140.0], [66.0, 2700.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 370.0, "minX": 1.0, "maxY": 1059.0, "series": [{"data": [[1.0, 370.0], [33.0, 1059.0], [66.0, 780.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70298768E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70298768E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70298768E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70298768E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70298768E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70298768E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70298768E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70298768E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70298768E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70298768E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70298768E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70298768E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

