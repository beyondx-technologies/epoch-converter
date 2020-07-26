<template>
  <div class="bg-black-200 text-white py-10">
        <div class="flex justify-center">
        <b class="flex">Made with <img src="../../assets/heart.svg" alt="heart" class="px-2"> by folks at Beyond X</b>
      </div>
      <div class="m-10">
        <p>What is epoch time? ... Some systems store epoch dates as a signed 32-bit integer, which might cause problems 
          on January 19, 2038 (known as the Year 2038 problem or Y2038). 
          The converter on this page converts timestamps in seconds (10-digit), milliseconds (13-digit) and microseconds (16-digit) to readable dates.</p>
      </div>
    <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">

      <!-- Current Unix Time -->
      <div class="flex text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-blue-500 pt-10 px-0 sm:px-0 md:px-2 lg:px-4 xl:px-4 ml-2 sm:ml-2 md:ml-8 lg:ml-24 xl:ml-24">
        The current Unix epoch time is
        <div class="text-white flex px-0 sm:px-0 md:px-2 lg:px-2 xl:px-2 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm">
          {{CurrentEpochTime}}
          <div class="px-2">
            <img src="../../assets/copy.svg" alt="copy"  @click="doCopy(CurrentEpochTime)"/>
          </div>
        </div>
      </div>

    <!-- Local Time -->
      <div class="text-white ml-8 mr-8 sm:ml-8 sm:mr-8 sm:mb-8 md:ml-8 md:mr-8 md:mb-8 lg:ml-24 lg:mr-24 lg:mb-24 xl:ml-24 xl:mr-24 xl:mb-24 sm:m-auto md:ml-auto lg:ml-auto xl:ml-auto mr-2 sm:mr-2 md:mr-8 lg:mr-20 xl:mr-20 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm ">
        <div>
          <span class="border-b-2 border-yellow-150 p-1 text-yellow-150 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm mr-4">Local time</span>
          <!-- <span class="text-sm">GMT</span> -->
        </div>
        <div class="bg-black-300 p-6 rounded-lg mt-4 ml-0">
          <div class="flex">
            <span class="text-yellow-150">Date:</span> {{localTime.date}}   <img src="../../assets/copy.svg" alt="copy" @click="doCopy(localTime.date)" class="px-2"/>
          </div>
          <div class="flex">
            <span class="text-yellow-150">Time:</span> {{localTime.time}} <img src="../../assets/copy.svg" alt="copy" @click="doCopy(localTime.time)" class="px-2"/>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row ml-2 mr-2 mb-8 sm:ml-8 sm:mr-8 sm:mb-8 md:ml-8 md:mr-8 md:mb-8 lg:ml-24 lg:mr-24 lg:mb-24 xl:ml-24 xl:mr-24 xl:mb-24">

    <!-- Timestamp to Human -->
      <div class="flex-1 bg-black-300 px-2 m-2 rounded-lg font-sans">
        <div class="flex">
          <div class="font-bold font-sans text-4xl">
            Convert
            <br />Timestamp to
            <br />Human data
          </div>
          <div class="ml-auto">
         <img src="../../assets/first_copy.svg" alt="copy" />
          </div>
        </div>
        <div class="mt-2">
          <input
            type="text"
            class="border-none m-3 ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75  w-64 sm:w-64 md:w-64 lg:w-96 xl:w-96 h-10 px-2 py-2 rounded"
            v-model="enteredEpochTime"
            :placeholder="this.enteredCurrentTime"
          />
        </div>
        <div class="mt-2">
          <p class="text-blue-500 text-xs">
            Supports Unix timestamps in seconds, milliseconds,
            <br />microseconds and nanoseconds.
          </p>
        </div>
        <div class="m-5 ml-0">
          <a
            class="bg-yellow-150 px-5 sm:px-5 md:px-12 lg:px-16 xl:px-16 cursor-pointer py-3 rounded"
            v-on:click="convertEpochToHuman"
          >Timestamp to Human data</a>
        </div>
        <div class="mt-8">
          <p>Result</p>
          <div class="mt-2">
            <p class="text-yellow-150">Location:</p>
            <div class="mt-1 flex">
              {{currentLocation}}
              <div class="px-2">
                <img src="../../assets/copy.svg" alt="copy" @click="doCopy(currentLocation)"/>
              </div>
            </div>
          </div>
          <div class="mt-2 mb-2">
            <p class="text-yellow-150">Your time zone:</p>
            <div v-if="this.CurrentGMT.day!==null">
              <div class="mt-1 flex">
                  {{HumanTimeStamp}}
                <div class="px-2">
                  <img src="../../assets/copy.svg" alt="copy" @click="doCopy(HumanTimeStamp)" />
                </div>
              </div>
            </div>
            <div v-else>
              <div class="mt-2 mb-2 text-blue-500">Select to search the value</div>
            </div>
            <div class="mt-1 flex">
              <p class="text-yellow-150">GMT:</p>
              {{CurrentGMT.gmt}}
              <div class="px-2">
                <img src="../../assets/copy.svg" alt="copy" @click="doCopy(CurrentGMT.gmt)" />
              </div>
            </div>
          </div>
          <div class="mt-2 mb-2">
            <p class="text-yellow-150">Relative:</p>
            <div v-if="this.CurrentGMT.relative!==null">
              <div class="mt-1 flex">
                {{CurrentGMT.relative}}
                <div class="px-2">
                  <img src="../../assets/copy.svg" alt="copy" @click="doCopy(CurrentGMT.relative)"/>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="mt-1 text-blue-500">Select to search the GMT</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Human to Timestamp -->
      <div class="flex-1 bg-black-300 px-2 m-2 rounded-lg font-sans">
        <div class="flex">
          <div class="font-bold font-sans text-4xl">
            Convert
            <br />Human data to
            <br />Timestamp
          </div>
          <div class="ml-auto">
             <img src="../../assets/sec_copy.svg" alt="copy" />
          </div>
        </div>
        <div class="mt-2 flex">
          <input
            v-on:keyup.enter="$event.target.nextElementSibling.focus()"
            v-model="EnteredHumanTime.year"
            type="text"
            class="border-none m-1 sm:m-1 md:m-2 lg:m-3 xl:m-3 ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75 w-12 sm:w-12 md:w-16 lg:w-16 xl:w-16 h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10 px-1 sm:px-1 md:px-1 lg:px-2 xl:px-2 py-2 rounded"
            :placeholder="this.EnteredHumanTime.year"
            maxlength="4"
          />
          <input
            type="text"
            class="border-none m-1 sm:m-1 md:m-2 lg:m-3 xl:m-3  ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75 w-12 sm:w-12 md:w-16 lg:w-16 xl:w-16 h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10 px-1 sm:px-1 md:px-1 lg:px-2 xl:px-2 py-2 rounded"
            :placeholder="this.EnteredHumanTime.month"
            v-on:keyup.enter="$event.target.nextElementSibling.focus()"
            v-model="EnteredHumanTime.month"
            maxlength="2"
          />
          <input
            type="text"
            class="border-none m-1 sm:m-1 md:m-2 lg:m-3 xl:m-3  ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75 w-12 sm:w-12 md:w-16 lg:w-16 xl:w-16 h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10 px-1 sm:px-1 md:px-1 lg:px-2 xl:px-2 px-2 py-2 rounded"
            :placeholder="this.EnteredHumanTime.day"
            v-on:keyup.enter="$event.target.nextElementSibling.focus()"
            v-model="EnteredHumanTime.day"
            maxlength="2"
          />
        </div>
        <div class="flex">
          <input
            type="text"
            class="border-none m-1 sm:m-1 md:m-2 lg:m-3 xl:m-3  ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75 w-12 sm:w-12 md:w-16 lg:w-16 xl:w-16 h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10 px-1 sm:px-1 md:px-1 lg:px-2 xl:px-2 py-2 rounded"
            :placeholder="this.EnteredHumanTime.hour"
            v-on:keyup.enter="$event.target.nextElementSibling.focus()"
            v-model="EnteredHumanTime.hour"
            maxlength="2"
          />
          <input
            type="text"
            class="border-none m-1 sm:m-1 md:m-2 lg:m-3 xl:m-3  ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75 w-12 sm:w-12 md:w-16 lg:w-16 xl:w-16 h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10 px-1 sm:px-1 md:px-1 lg:px-2 xl:px-2 py-2 rounded"
            :placeholder="this.EnteredHumanTime.minute"
            v-on:keyup.enter="$event.target.nextElementSibling.focus()"
            v-model="EnteredHumanTime.minute"
            maxlength="2"
          />
          <input
            type="text"
            class="border-none m-1 sm:m-1 md:m-2 lg:m-3 xl:m-3  ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75 w-12 sm:w-12 md:w-16 lg:w-16 xl:w-16 h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10 px-1 sm:px-1 md:px-1 lg:px-2 xl:px-2 py-2 rounded"
            :placeholder="this.EnteredHumanTime.sec"
            v-on:keyup.enter="$event.target.nextElementSibling.focus()"
            v-model="EnteredHumanTime.sec"
            maxlength="2"
          />
          <input
            type="text"
            class="border-none m-1 sm:m-1 md:m-2 lg:m-3 xl:m-3  ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75 w-12 sm:w-12 md:w-16 lg:w-16 xl:w-16 h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10 px-1 py-2 rounded"
            :placeholder="this.EnteredHumanTime.sec"
            v-model="EnteredHumanTime.ampm"
            maxlength="2"
          />

          <p class="bg-black-400 m-1 sm:m-1 md:m-2 lg:m-3 xl:m-3  ml-0  w-12 sm:w-12 md:w-16 lg:w-16 xl:w-16 h-8 sm:h-8 md:h-8 lg:h-10 xl:h-10 px-2 py-2 rounded border-none text-gray-500 text-sm">GMT</p>
        </div>
        <div class="m-5 ml-0">
          <a
            v-on:click="humanToEpoch"
            class="bg-green-150 px-5 sm:px-5 md:px-12 lg:px-16 xl:px-16 py-3 rounded cursor-pointer"
          >Human data to Timestamp</a>
        </div>
        <div class="mt-8">
          <p>Result</p>
          <div class="mt-2">
            <p class="text-green-150">Epoch timestamp:</p>
            <div class="mt-2 flex">
              {{EpochValue}}
              <div class="px-2">
                <img src="../../assets/copy.svg" alt="copy" @click="doCopy(EpochValue)" />
              </div>
            </div>
          </div>
          <div class="mt-2 mb-2">
            <p class="text-green-150">Timestamp in milliseconds:</p>
            <div class="mt-2 flex">
              {{EpochValue*1000}}
              <div class="px-2">
                <img src="../../assets/copy.svg" alt="copy"  @click="doCopy(EpochValue*1000)" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- days minutes secounds -->

      <div class="flex-1 bg-black-300 px-2 m-2 rounded-lg font-sans">
        <div class="flex">
          <div class="font-bold font-sans text-4xl">
            Convert
            <br />Seconds to
            <br />days, hrs and mins
          </div>
          <div class="ml-auto">
            <img src="../../assets/third_copy.svg" alt="copy" />
          </div>
        </div>
        <div class="mt-2">
          <input
            type="text"
            class="border-none m-3 ml-0 bg-black-400 placeholder-gray-500 placeholder-opacity-75 w-64 sm:w-64 md:w-96 lg:w-96 xl:w-96  h-10 px-2 py-2 rounded"
            placeholder="Enter Secounds"
            v-model="EnteredSec"
            
          />
        </div>
        <div class="m-5 ml-0">
          <a
            class="bg-blue-150 px-2 sm:px-2 md:px-12 lg:px-16 xl:px-16 py-3 rounded cursor-pointer"
            @click="secoundToTimeStamp"
          >Seconds to days, hrs and mins</a>
        </div>
        <div class="mt-8">
          <p>Result</p>
          <div class="mt-2">
            <p class="text-blue-150">Converted Time</p>
            <div v-if="this.secValue!==null" class="mt-2 flex">
              <p class="px-2">{{secValue}}</p>
              <div>
                <img src="../../assets/copy.svg" alt="copy" @click="doCopy(secValue)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <a href="https://www.instagram.com/beyondxtech/"><img src="../../assets/instagram.svg" alt="instagram" class="h-5 px-5"></a>
      <a href="https://www.linkedin.com/company/beyondxtec"><img src="../../assets/linkedin.svg" alt="linkedin" class="h-5 px-5"></a>
      <a href="https://www.facebook.com/beyondXofficial/"><img src="../../assets/facebook.svg" alt="facebook" class="h-5 px-5"></a>
      <a href="https://github.com/beyondx-technologies/epoch-converter"><img src="../../assets/github.svg" alt="github" class="h-5 px-5"></a>
      <a href="https://twitter.com/BeyondXTech"><img src="../../assets/twitter.svg" alt="twitter" class="h-5 px-5"></a>
    </div>
  </div>
</template>




<script>
import '../../assets/instagram.svg'
export default {
  // Datas used
  data() {
    return {
      CurrentEpochTime: null,
      enteredEpochTime: null,
      enteredCurrentTime: null,
      EpochValue: null,
      currentLocation:null,
      localTime:{
          date:null,
          time:null
      },
      secValue: null,
      EnteredSec: null,
      HumanTimeStamp:null,
      EnteredHumanTime: {
        year: null,
        month: null,
        day: null,
        hour: null,
        minute: null,
        sec: null,
        ampm: null
      },
      CurrentGMT: {
        day: null,
        month: null,
        dayValue: null,
        year: null,
        time: null,
        daylight: null,
        relative: null,
        gmt: null
      }
    };
  },

  methods: {

    convertEpochToHuman: function() {
      if (this.enteredEpochTime == null) {
        var dateVal = "/Date(" + this.enteredCurrentTime + ")/";
      } else {
          this.$toast.open('Converted Timestamp to Human data');
        if (this.enteredEpochTime.length <= 13) {
          this.enteredEpochTime = this.enteredEpochTime * 1000;
        }
        dateVal = "/Date(" + this.enteredEpochTime + ")/";
      }
      var date = new Date(parseFloat(dateVal.substr(6)));
      var hours = date.getHours();
      var ampm = hours >= 12 ? "PM" : "AM";
      this.CurrentGMT.daylight = ampm;
      this.CurrentGMT.year = date.getFullYear();
      this.CurrentGMT.dayValue = date.getDate();
      var hourConverted = hours >= 12 ? hours - 12 : hours;
      this.CurrentGMT.time =
        hourConverted + ":" + date.getMinutes() + ":" + date.getSeconds();
      var month = date.getMonth();
      this.CurrentGMT.month = this.getMonthFull(month);
      this.CurrentGMT.day = this.getDayFull(date.getDay());
      this.timeDiffrence(this.enteredEpochTime);
      this.HumanTimeStamp = this.CurrentGMT.day+", "+this.CurrentGMT.month+" "+this.CurrentGMT.dayValue+", "+this.CurrentGMT.year+" "+this.CurrentGMT.time+" "+this.CurrentGMT.daylight+" GMT"+this.CurrentGMT.gmt
    },

    getMonthFull: function(month) {
      switch (month) {
        case 0:
          return "January";
        case 1:
          return "Feburary";
        case 2:
          return "March";
        case 3:
          return "April";
        case 4:
          return "May";
        case 5:
          return "June";
        case 6:
          return "July";
        case 7:
          return "August";
        case 8:
          return "September";
        case 9:
          return "October";
        case 10:
          return "November";
        case 11:
          return "December";
        default:
          return "invalid";
      }
    },

    getDayFull: function(day) {
      switch (day) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        default:
          return "invalid";
      }
    },

    timeDiffrence: function(previous) {
      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;
      var current = Date.now();
      var elapsed = current - previous;

      if (elapsed < msPerMinute) {
        this.CurrentGMT.relative = Math.round(elapsed / 1000) + " seconds ago";
      } else if (elapsed < msPerHour) {
        this.CurrentGMT.relative =
          Math.round(elapsed / msPerMinute) + " minutes ago";
      } else if (elapsed < msPerDay) {
        this.CurrentGMT.relative =
          Math.round(elapsed / msPerHour) + " hours ago";
      } else if (elapsed < msPerMonth) {
        this.CurrentGMT.relative =
          "approximately " + Math.round(elapsed / msPerDay) + " days ago";
      } else if (elapsed < msPerYear) {
        this.CurrentGMT.relative =
          "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
      } else {
        this.CurrentGMT.relative =
          "approximately " + Math.round(elapsed / msPerYear) + " years ago";
      }
    },

    secondsToDhms: function(seconds) {
      seconds = Number(seconds);
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor((seconds % (3600 * 24)) / 3600);
      var m = Math.floor((seconds % 3600) / 60);
      var s = Math.floor(seconds % 60);

      var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    },

    humanToEpoch: function() {
      if (this.EpochValue !== null) {
        var year = this.EnteredHumanTime.year;
        var month = this.getMonthFull(this.EnteredHumanTime.month - 1);
        var day = this.EnteredHumanTime.day;
        var time =
          this.EnteredHumanTime.hour +
          ":" +
          this.EnteredHumanTime.minute +
          ":" +
          this.EnteredHumanTime.sec;
        var gmt = new Date().toString().match(/GMT\+[0-9]+/)[0];
        gmt = gmt.replace("GMT", "");
        gmt = "GMT" + gmt.substring(0, 3) + ":" + gmt.substring(3, gmt.length);
        const value = day + " " + month + " " + year + " " + time + " " + gmt;
        this.epochConverter(value);
      }
    },

    epochConverter: function(value) {
      var date = new Date(value);
      var timestamp = Math.floor(date.getTime() / 1000.0);
      this.EpochValue = timestamp;
    },

    secoundToTimeStamp: function() {
      var sec = this.secondsToDhms(this.EnteredSec);
      this.secValue = sec;
       this.$toast.open(this.EnteredSec+'secs to days, hrs and mins');
    },

    doCopy: function (value) {
         this.$toast.open('Copied '+value);
        this.$copyText(value).then(function (e) {
        }, function (e) {
            alert('error')
        })
      }
  },

  created() {
    const CurrentNow = Date.now();
    var newDate = new Date();
    setInterval(() => {
      const now = Date.now();
      this.CurrentEpochTime = now;
    }, 1000);
    this.enteredCurrentTime = CurrentNow;
    this.currentLocation=Intl.DateTimeFormat().resolvedOptions().timeZone;
    var date = new Date().toString().match(/GMT\+[0-9]+/)[0];
    date = date.replace("GMT", "");
    date = date.substring(0, 3) + ":" + date.substring(3, date.length);
    this.CurrentGMT.gmt = date;
    if (this.enteredEpochTime == null) {
      this.convertEpochToHuman();
    }
    this.timeDiffrence(this.enteredCurrentTime);
    if (this.EpochValue == null) {
      (this.EnteredHumanTime.year = newDate.getFullYear()),
        (this.EnteredHumanTime.month = newDate.getMonth() + 1),
        (this.EnteredHumanTime.day = newDate.getDate()),
        (this.EnteredHumanTime.hour = newDate.getHours()),
        (this.EnteredHumanTime.minute = newDate.getMinutes()),
        (this.EnteredHumanTime.sec = newDate.getSeconds()),
        (this.EnteredHumanTime.ampm =
          this.EnteredHumanTime.hour >= 12 ? "PM" : "AM");
      this.epochConverter(newDate);
    }
    this.localTime.date= this.getDayFull(newDate.getDay())+", "+this.getMonthFull(newDate.getMonth())+" "+newDate.getDate()+", "+newDate.getFullYear();
      setInterval(() => {
       var nDate = new Date();
       var ampm = nDate.getHours()>=12 ? "PM" : "AM";
       this.localTime.time = nDate.getHours()+":"+nDate.getMinutes()+":"+nDate.getSeconds()+" "+ampm;
    }, 1000);
  }
};
</script>

<style scoped>
</style>

