var app = new Vue({
    el: '#exchangeCalculator',
    data: {
        //先輸入預設值
        inputMoney: 0, //輸入金額欄位
        result: 0, //計算結果
        currentCountry: '美金', //幣值預設美金
        currentCurrency: 29.53, //2020/07/31匯率
        exchangeRate: [ //各國匯率資料
            {'country':'美金', 'buyIn': '29.43', 'sellOut':'29.53'},
            {'country':'港幣', 'buyIn': '3.773', 'sellOut': '3.833'},
            {'country':'英鎊', 'buyIn': '38.54', 'sellOut': '38.96'},
            {'country':'澳幣', 'buyIn': '21.11', 'sellOut': '21.34'},
            {'country':'加拿大幣', 'buyIn': '21.88', 'sellOut': '22.1'},
            {'country':'新加坡幣', 'buyIn': '21.43', 'sellOut': '21.61'},
            {'country':'瑞士法郎', 'buyIn': '32.31', 'sellOut': '32.6'},
            {'country':'日圓', 'buyIn': '0.2803', 'sellOut': '0.2843'},
            {'country':'南非幣', 'buyIn': '1.711', 'sellOut': '1.791'},
            {'country':'瑞典幣', 'buyIn': '3.36', 'sellOut': '3.46'},
            {'country':'紐元', 'buyIn': '19.64', 'sellOut': '19.84'},
            {'country':'泰幣', 'buyIn': '0.93', 'sellOut': '0.97'},
            {'country':'菲國比索', 'buyIn': '0.5275', 'sellOut': '0.6605'},
            {'country':'印尼幣', 'buyIn': '0.00168', 'sellOut': '0.00238'},
            {'country':'歐元', 'buyIn': '34.82', 'sellOut': '35.22'},
            {'country':'韓元', 'buyIn': '0.02302', 'sellOut': '0.02692'},
            {'country':'越南盾', 'buyIn': '0.0009', 'sellOut': '0.0014'},
            {'country':'馬來幣', 'buyIn': '5.842', 'sellOut': '7.467'},
            {'country':'人民幣', 'buyIn': '4.193', 'sellOut': '4.243'}
        ],
    },
    computed: {
        calculateMoney: function(){ 
            // 計算完兌換的幣值後，小數點取到第2位，存到結果
            this.result = parseFloat(this.inputMoney/this.currentCurrency).toFixed(2);
            return this.result;
        }
    },
    methods:{
        currentData: function (item){
            // 將國家(幣值)及匯率設定成點到的國家(幣值)及對應的匯率
            this.currentCountry = item.country;
            this.currentCurrency = item.sellOut;
            console.log();
        },
        change: function(item){
             // 將點選到的class設為active
             if(item.country == this.currentCountry) {
                 return 'active';
             }
        }
    }
})