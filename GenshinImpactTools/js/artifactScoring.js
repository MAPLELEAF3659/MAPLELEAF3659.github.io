Vue.createApp({
    data() {
        return {
            nameSelectedIndex: -1,
            typeSelectedIndex: -1,
            level: -1,
            isStar1: false,
            isStar2: false,
            isStar3: false,
            isStar4: false,
            isStar5: false,
            scoreLabel: 'N/A',
            nameArr: ['幸運兒',
                '遊醫',
                '冒險家',
                '學士',
                '戰狂',
                '祭冰之人',
                '奇跡',
                '勇士之心',
                '教官',
                '祭火之人',
                '賭徒',
                '祭水之人',
                '武人',
                '守護之心',
                '祭雷之人',
                '流放者',
                '行者之心',
                '來歆餘響',
                '熾烈的炎之魔女',
                '絕緣之旗印',
                '角鬥士的終幕禮',
                '如雷的盛怒',
                '追憶之注連',
                '冰風迷途的勇士',
                '染血的騎士道',
                '華館夢醒形骸記',
                '昔日宗室之儀',
                '沉淪之心',
                '悠古的磐岩',
                '海染硨磲',
                '翠綠之影',
                '蒼白之火',
                '流浪大地的樂團',
                '逆飛的流星',
                '平息鳴雷的尊者',
                '辰砂往生錄',
                '渡過烈火的賢人',
                '千岩牢固',
                '被憐愛的少女',
            ],
            typeArr: ['生之花',
                '死之羽',
                '時之沙',
                '空之杯',
                '理之冠',
            ],
            attTypeArr: ["攻擊力",
                "攻擊力百分比",
                "防禦力",
                "防禦力百分比",
                "生命值",
                "生命值百分比",
                "爆擊率",
                "爆擊傷害",
                "元素充能效率",
                "元素精通",
                "治療加成",
                "物理傷害加成",
                "火元素傷害加成",
                "雷元素傷害加成",
                "冰元素傷害加成",
                "水元素傷害加成",
                "風元素傷害加成",
                "岩元素傷害加成"
            ],
            attInputsName: ['選擇詞條類型', '選擇詞條類型', '選擇詞條類型', '選擇詞條類型', '選擇詞條類型'],
            attInputs: [0, 0, 0, 0, 0],
            typeIndex: '',
        }
    },
    watch: {
        nameSelectedIndex(val) {
            if (val < 3) {
                this.isStar1 = true;
                this.isStar2 = true;
                this.isStar3 = true;
                this.isStar4 = false;
                this.isStar5 = false;
            } else if (val >= 3 && val < 16) {
                this.isStar1 = false;
                this.isStar2 = false;
                this.isStar3 = true;
                this.isStar4 = true;
                this.isStar5 = false;
            } else {
                this.isStar1 = false;
                this.isStar2 = false;
                this.isStar3 = false;
                this.isStar4 = true;
                this.isStar5 = true;
            }
        }
    },
    methods: {
        mainAtt(typeIndex) {
            switch (typeIndex) {
                case 0:
                    return [this.attTypeArr[4]];
                case 1:
                    return [this.attTypeArr[0]];
                case 2:
                    return [this.attTypeArr[1], this.attTypeArr[3], this.attTypeArr[5], this.attTypeArr[8], this.attTypeArr[9]];
                case 3:
                    return [this.attTypeArr[1], this.attTypeArr[3], this.attTypeArr[5], this.attTypeArr[9], this.attTypeArr[11], this.attTypeArr[12], this.attTypeArr[13], this.attTypeArr[14], this.attTypeArr[15], this.attTypeArr[16], this.attTypeArr[17]];
                case 4:
                    return [this.attTypeArr[1], this.attTypeArr[3], this.attTypeArr[5], this.attTypeArr[6], this.attTypeArr[7], this.attTypeArr[9], this.attTypeArr[10]];
            }
        },
        calculateScore() {
            tempScore = 0;
            for (let i = 0; i < 5; i++) {
                switch (this.attTypeArr.indexOf(this.attInputsName[i])) {
                    case 0: //攻擊力
                        tempScore += Math.floor(this.attInputs[i] / 10);
                        break;
                    case 1: //攻擊力百分比
                        tempScore += Math.floor(this.attInputs[i] / 1.5);
                        break;
                    case 6: //爆擊率
                        tempScore += Math.floor(this.attInputs[i] / 1);
                        break;
                    case 7: //爆擊傷害
                        tempScore += Math.floor(this.attInputs[i] / 2);
                        break;
                    case 8: //元素充能
                        tempScore += Math.floor(this.attInputs[i] / 1.67);
                        break;
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17: //元素傷害
                        tempScore += Math.floor(this.attInputs[i] / 1.5);
                        break;
                    default:
                        break;
                }
            }
            if (tempScore == 0)
                this.scoreLabel = 'N/A';
            else if (tempScore < 10)
                this.scoreLabel = 'D';
            else if (tempScore < 20)
                this.scoreLabel = 'C';
            else if (tempScore < 30)
                this.scoreLabel = 'B';
            else if (tempScore < 40)
                this.scoreLabel = 'A';
            else
                this.scoreLabel = 'S';
            return this.scoreLabel + " " + tempScore;
        }
    }
}).mount("#main");