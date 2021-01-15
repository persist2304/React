import React, { useState } from 'react';
import styles from "../../style/Loan.scss";
// use hook get Data
import { useSelector, useDispatch } from 'react-redux';
// add method & edit 
import { addOrder, editOrder, deleteOrder } from '../../action/order.js'
import orderReducer from '../../reducers/order';
import ToggleSelector from '../../components/ToggleSelector'
// FoldableContent
import FoldableContent from '../../components/FoldableContent';

const InputForms = (props) => {
    return (
        <div>
            <input id="name" type="text" value={ props.value } onChange={ props.onChange }/>
        </div>
    )
}

const CityData = {
    台北市: [
      { zip: '100', value: '中正區', area: '台北市' },
      { zip: '103', value: '大同區', area: '台北市' },
      { zip: '104', value: '中山區', area: '台北市' },
      { zip: '105', value: '松山區', area: '台北市' },
      { zip: '106', value: '大安區', area: '台北市' },
      { zip: '108', value: '萬華區', area: '台北市' },
      { zip: '110', value: '信義區', area: '台北市' },
      { zip: '111', value: '士林區', area: '台北市' },
      { zip: '112', value: '北投區', area: '台北市' },
      { zip: '114', value: '內湖區', area: '台北市' },
      { zip: '115', value: '南港區', area: '台北市' },
      { zip: '116', value: '文山區', area: '台北市' },
    ],
    基隆市: [
      { zip: '200', value: '仁愛區', area: '基隆市' },
      { zip: '201', value: '信義區', area: '基隆市' },
      { zip: '202', value: '中正區', area: '基隆市' },
      { zip: '203', value: '中山區', area: '基隆市' },
      { zip: '204', value: '安樂區', area: '基隆市' },
      { zip: '205', value: '暖暖區', area: '基隆市' },
      { zip: '206', value: '七堵區', area: '基隆市' },
    ],
    新北市: [
      { zip: '207', value: '萬里區', area: '新北市' },
      { zip: '208', value: '金山區', area: '新北市' },
      { zip: '220', value: '板橋區', area: '新北市' },
      { zip: '221', value: '汐止區', area: '新北市' },
      { zip: '222', value: '深坑區', area: '新北市' },
      { zip: '223', value: '石碇區', area: '新北市' },
      { zip: '224', value: '瑞芳區', area: '新北市' },
      { zip: '226', value: '平溪區', area: '新北市' },
      { zip: '227', value: '雙溪區', area: '新北市' },
      { zip: '228', value: '貢寮區', area: '新北市' },
      { zip: '231', value: '新店區', area: '新北市' },
      { zip: '232', value: '坪林區', area: '新北市' },
      { zip: '233', value: '烏來區', area: '新北市' },
      { zip: '234', value: '永和區', area: '新北市' },
      { zip: '235', value: '中和區', area: '新北市' },
      { zip: '236', value: '土城區', area: '新北市' },
      { zip: '237', value: '三峽區', area: '新北市' },
      { zip: '238', value: '樹林區', area: '新北市' },
      { zip: '239', value: '鶯歌區', area: '新北市' },
      { zip: '241', value: '三重區', area: '新北市' },
      { zip: '242', value: '新莊區', area: '新北市' },
      { zip: '243', value: '泰山區', area: '新北市' },
      { zip: '244', value: '林口區', area: '新北市' },
      { zip: '247', value: '蘆洲區', area: '新北市' },
      { zip: '248', value: '五股區', area: '新北市' },
      { zip: '249', value: '八里區', area: '新北市' },
      { zip: '251', value: '淡水區', area: '新北市' },
      { zip: '252', value: '三芝區', area: '新北市' },
      { zip: '253', value: '石門區', area: '新北市' },
    ],
    宜蘭縣: [
      { zip: '260', value: '宜蘭市', area: '宜蘭縣' },
      { zip: '261', value: '頭城鎮', area: '宜蘭縣' },
      { zip: '262', value: '礁溪鄉', area: '宜蘭縣' },
      { zip: '263', value: '壯圍鄉', area: '宜蘭縣' },
      { zip: '264', value: '員山鄉', area: '宜蘭縣' },
      { zip: '265', value: '羅東鎮', area: '宜蘭縣' },
      { zip: '266', value: '三星鄉', area: '宜蘭縣' },
      { zip: '267', value: '大同鄉', area: '宜蘭縣' },
      { zip: '268', value: '五結鄉', area: '宜蘭縣' },
      { zip: '269', value: '冬山鄉', area: '宜蘭縣' },
      { zip: '270', value: '蘇澳鎮', area: '宜蘭縣' },
      { zip: '272', value: '南澳鄉', area: '宜蘭縣' },
    ],
    新竹市: [
      { zip: '300', value: '東區', area: '新竹市' },
      { zip: '300', value: '北區', area: '新竹市' },
      { zip: '300', value: '香山區', area: '新竹市' },
    ],
    新竹縣: [
      { zip: '302', value: '竹北市', area: '新竹縣' },
      { zip: '303', value: '湖口鄉', area: '新竹縣' },
      { zip: '304', value: '新豐鄉', area: '新竹縣' },
      { zip: '305', value: '新埔鎮', area: '新竹縣' },
      { zip: '306', value: '關西鎮', area: '新竹縣' },
      { zip: '307', value: '芎林鄉', area: '新竹縣' },
      { zip: '308', value: '寶山鄉', area: '新竹縣' },
      { zip: '310', value: '竹東鎮', area: '新竹縣' },
      { zip: '311', value: '五峰鄉', area: '新竹縣' },
      { zip: '312', value: '橫山鄉', area: '新竹縣' },
      { zip: '313', value: '尖石鄉', area: '新竹縣' },
      { zip: '314', value: '北埔鄉', area: '新竹縣' },
      { zip: '315', value: '峨眉鄉', area: '新竹縣' },
    ],
    桃園市: [
      { zip: '320', value: '中壢區', area: '桃園市' },
      { zip: '324', value: '平鎮區', area: '桃園市' },
      { zip: '325', value: '龍潭區', area: '桃園市' },
      { zip: '326', value: '楊梅區', area: '桃園市' },
      { zip: '327', value: '新屋區', area: '桃園市' },
      { zip: '328', value: '觀音區', area: '桃園市' },
      { zip: '330', value: '桃園區', area: '桃園市' },
      { zip: '333', value: '龜山區', area: '桃園市' },
      { zip: '334', value: '八德區', area: '桃園市' },
      { zip: '335', value: '大溪區', area: '桃園市' },
      { zip: '336', value: '復興區', area: '桃園市' },
      { zip: '337', value: '大園區', area: '桃園市' },
      { zip: '338', value: '蘆竹區', area: '桃園市' },
    ],
    苗栗縣: [
      { zip: '350', value: '竹南鎮', area: '苗栗縣' },
      { zip: '351', value: '頭份市', area: '苗栗縣' },
      { zip: '352', value: '三灣鄉', area: '苗栗縣' },
      { zip: '353', value: '南庄鄉', area: '苗栗縣' },
      { zip: '354', value: '獅潭鄉', area: '苗栗縣' },
      { zip: '356', value: '後龍鎮', area: '苗栗縣' },
      { zip: '357', value: '通霄鎮', area: '苗栗縣' },
      { zip: '358', value: '苑裡鎮', area: '苗栗縣' },
      { zip: '360', value: '苗栗市', area: '苗栗縣' },
      { zip: '361', value: '造橋鄉', area: '苗栗縣' },
      { zip: '362', value: '頭屋鄉', area: '苗栗縣' },
      { zip: '363', value: '公館鄉', area: '苗栗縣' },
      { zip: '364', value: '大湖鄉', area: '苗栗縣' },
      { zip: '365', value: '泰安鄉', area: '苗栗縣' },
      { zip: '366', value: '銅鑼鄉', area: '苗栗縣' },
      { zip: '367', value: '三義鄉', area: '苗栗縣' },
      { zip: '368', value: '西湖鄉', area: '苗栗縣' },
      { zip: '369', value: '卓蘭鎮', area: '苗栗縣' },
    ],
    台中市: [
      { zip: '400', value: '中區', area: '台中市' },
      { zip: '401', value: '東區', area: '台中市' },
      { zip: '402', value: '南區', area: '台中市' },
      { zip: '403', value: '西區', area: '台中市' },
      { zip: '404', value: '北區', area: '台中市' },
      { zip: '406', value: '北屯區', area: '台中市' },
      { zip: '407', value: '西屯區', area: '台中市' },
      { zip: '408', value: '南屯區', area: '台中市' },
      { zip: '411', value: '太平區', area: '台中市' },
      { zip: '412', value: '大里區', area: '台中市' },
      { zip: '413', value: '霧峰區', area: '台中市' },
      { zip: '414', value: '烏日區', area: '台中市' },
      { zip: '420', value: '豐原區', area: '台中市' },
      { zip: '421', value: '后里區', area: '台中市' },
      { zip: '422', value: '石岡區', area: '台中市' },
      { zip: '423', value: '東勢區', area: '台中市' },
      { zip: '424', value: '和平區', area: '台中市' },
      { zip: '426', value: '新社區', area: '台中市' },
      { zip: '427', value: '潭子區', area: '台中市' },
      { zip: '428', value: '大雅區', area: '台中市' },
      { zip: '429', value: '神岡區', area: '台中市' },
      { zip: '432', value: '大肚區', area: '台中市' },
      { zip: '433', value: '沙鹿區', area: '台中市' },
      { zip: '434', value: '龍井區', area: '台中市' },
      { zip: '435', value: '梧棲區', area: '台中市' },
      { zip: '436', value: '清水區', area: '台中市' },
      { zip: '437', value: '大甲區', area: '台中市' },
      { zip: '438', value: '外埔區', area: '台中市' },
      { zip: '439', value: '大安區', area: '台中市' },
    ],
    彰化縣: [
      { zip: '500', value: '彰化市', area: '彰化縣' },
      { zip: '502', value: '芬園鄉', area: '彰化縣' },
      { zip: '503', value: '花壇鄉', area: '彰化縣' },
      { zip: '504', value: '秀水鄉', area: '彰化縣' },
      { zip: '505', value: '鹿港鎮', area: '彰化縣' },
      { zip: '506', value: '福興鄉', area: '彰化縣' },
      { zip: '507', value: '線西鄉', area: '彰化縣' },
      { zip: '508', value: '和美鎮', area: '彰化縣' },
      { zip: '509', value: '伸港鄉', area: '彰化縣' },
      { zip: '510', value: '員林市', area: '彰化縣' },
      { zip: '511', value: '社頭鄉', area: '彰化縣' },
      { zip: '512', value: '永靖鄉', area: '彰化縣' },
      { zip: '513', value: '埔心鄉', area: '彰化縣' },
      { zip: '514', value: '溪湖鎮', area: '彰化縣' },
      { zip: '515', value: '大村鄉', area: '彰化縣' },
      { zip: '516', value: '埔鹽鄉', area: '彰化縣' },
      { zip: '520', value: '田中鎮', area: '彰化縣' },
      { zip: '521', value: '北斗鎮', area: '彰化縣' },
      { zip: '522', value: '田尾鄉', area: '彰化縣' },
      { zip: '523', value: '埤頭鄉', area: '彰化縣' },
      { zip: '524', value: '溪州鄉', area: '彰化縣' },
      { zip: '525', value: '竹塘鄉', area: '彰化縣' },
      { zip: '526', value: '二林鎮', area: '彰化縣' },
      { zip: '527', value: '大城鄉', area: '彰化縣' },
      { zip: '528', value: '芳苑鄉', area: '彰化縣' },
      { zip: '530', value: '二水鄉', area: '彰化縣' },
    ],
    南投縣: [
      { zip: '540', value: '南投市', area: '南投縣' },
      { zip: '541', value: '中寮鄉', area: '南投縣' },
      { zip: '542', value: '草屯鎮', area: '南投縣' },
      { zip: '544', value: '國姓鄉', area: '南投縣' },
      { zip: '545', value: '埔里鎮', area: '南投縣' },
      { zip: '546', value: '仁愛鄉', area: '南投縣' },
      { zip: '551', value: '名間鄉', area: '南投縣' },
      { zip: '552', value: '集集鎮', area: '南投縣' },
      { zip: '553', value: '水里鄉', area: '南投縣' },
      { zip: '555', value: '魚池鄉', area: '南投縣' },
      { zip: '556', value: '信義鄉', area: '南投縣' },
      { zip: '557', value: '竹山鎮', area: '南投縣' },
      { zip: '558', value: '鹿谷鄉', area: '南投縣' },
    ],
    嘉義市: [
      { zip: '600', value: '東區', area: '嘉義市' },
      { zip: '600', value: '西區', area: '嘉義市' },
    ],
    嘉義縣: [
      { zip: '602', value: '番路鄉', area: '嘉義縣' },
      { zip: '603', value: '梅山鄉', area: '嘉義縣' },
      { zip: '604', value: '竹崎鄉', area: '嘉義縣' },
      { zip: '605', value: '阿里山鄉', area: '嘉義縣' },
      { zip: '606', value: '中埔鄉', area: '嘉義縣' },
      { zip: '607', value: '大埔鄉', area: '嘉義縣' },
      { zip: '608', value: '水上鄉', area: '嘉義縣' },
      { zip: '611', value: '鹿草鄉', area: '嘉義縣' },
      { zip: '612', value: '太保市', area: '嘉義縣' },
      { zip: '613', value: '朴子市', area: '嘉義縣' },
      { zip: '614', value: '東石鄉', area: '嘉義縣' },
      { zip: '615', value: '六腳鄉', area: '嘉義縣' },
      { zip: '616', value: '新港鄉', area: '嘉義縣' },
      { zip: '621', value: '民雄鄉', area: '嘉義縣' },
      { zip: '622', value: '大林鎮', area: '嘉義縣' },
      { zip: '623', value: '溪口鄉', area: '嘉義縣' },
      { zip: '624', value: '義竹鄉', area: '嘉義縣' },
      { zip: '625', value: '布袋鎮', area: '嘉義縣' },
    ],
    雲林縣: [
      { zip: '630', value: '斗南鎮', area: '雲林縣' },
      { zip: '631', value: '大埤鄉', area: '雲林縣' },
      { zip: '632', value: '虎尾鎮', area: '雲林縣' },
      { zip: '633', value: '土庫鎮', area: '雲林縣' },
      { zip: '634', value: '褒忠鄉', area: '雲林縣' },
      { zip: '635', value: '東勢鄉', area: '雲林縣' },
      { zip: '636', value: '台西鄉', area: '雲林縣' },
      { zip: '637', value: '崙背鄉', area: '雲林縣' },
      { zip: '638', value: '麥寮鄉', area: '雲林縣' },
      { zip: '640', value: '斗六市', area: '雲林縣' },
      { zip: '643', value: '林內鄉', area: '雲林縣' },
      { zip: '646', value: '古坑鄉', area: '雲林縣' },
      { zip: '647', value: '莿桐鄉', area: '雲林縣' },
      { zip: '648', value: '西螺鎮', area: '雲林縣' },
      { zip: '649', value: '二崙鄉', area: '雲林縣' },
      { zip: '651', value: '北港鎮', area: '雲林縣' },
      { zip: '652', value: '水林鄉', area: '雲林縣' },
      { zip: '653', value: '口湖鄉', area: '雲林縣' },
      { zip: '654', value: '四湖鄉', area: '雲林縣' },
      { zip: '655', value: '元長鄉', area: '雲林縣' },
    ],
    台南市: [
      { zip: '700', value: '中西區', area: '台南市' },
      { zip: '701', value: '東區', area: '台南市' },
      { zip: '702', value: '南區', area: '台南市' },
      { zip: '704', value: '北區', area: '台南市' },
      { zip: '708', value: '安平區', area: '台南市' },
      { zip: '709', value: '安南區', area: '台南市' },
      { zip: '710', value: '永康區', area: '台南市' },
      { zip: '711', value: '歸仁區', area: '台南市' },
      { zip: '712', value: '新化區', area: '台南市' },
      { zip: '713', value: '左鎮區', area: '台南市' },
      { zip: '714', value: '玉井區', area: '台南市' },
      { zip: '715', value: '楠西區', area: '台南市' },
      { zip: '716', value: '南化區', area: '台南市' },
      { zip: '717', value: '仁德區', area: '台南市' },
      { zip: '718', value: '關廟區', area: '台南市' },
      { zip: '719', value: '龍崎區', area: '台南市' },
      { zip: '720', value: '官田區', area: '台南市' },
      { zip: '721', value: '麻豆區', area: '台南市' },
      { zip: '722', value: '佳里區', area: '台南市' },
      { zip: '723', value: '西港區', area: '台南市' },
      { zip: '724', value: '七股區', area: '台南市' },
      { zip: '725', value: '將軍區', area: '台南市' },
      { zip: '726', value: '學甲區', area: '台南市' },
      { zip: '727', value: '北門區', area: '台南市' },
      { zip: '730', value: '新營區', area: '台南市' },
      { zip: '731', value: '後壁區', area: '台南市' },
      { zip: '732', value: '白河區', area: '台南市' },
      { zip: '733', value: '東山區', area: '台南市' },
      { zip: '734', value: '六甲區', area: '台南市' },
      { zip: '735', value: '下營區', area: '台南市' },
      { zip: '736', value: '柳營區', area: '台南市' },
      { zip: '737', value: '鹽水區', area: '台南市' },
      { zip: '741', value: '善化區', area: '台南市' },
      { zip: '742', value: '大內區', area: '台南市' },
      { zip: '743', value: '山上區', area: '台南市' },
      { zip: '744', value: '新市區', area: '台南市' },
      { zip: '745', value: '安定區', area: '台南市' },
    ],
    高雄市: [
      { zip: '800', value: '新興區', area: '高雄市' },
      { zip: '801', value: '前金區', area: '高雄市' },
      { zip: '802', value: '苓雅區', area: '高雄市' },
      { zip: '803', value: '鹽埕區', area: '高雄市' },
      { zip: '804', value: '鼓山區', area: '高雄市' },
      { zip: '805', value: '旗津區', area: '高雄市' },
      { zip: '806', value: '前鎮區', area: '高雄市' },
      { zip: '807', value: '三民區', area: '高雄市' },
      { zip: '811', value: '楠梓區', area: '高雄市' },
      { zip: '812', value: '小港區', area: '高雄市' },
      { zip: '813', value: '左營區', area: '高雄市' },
      { zip: '814', value: '仁武區', area: '高雄市' },
      { zip: '815', value: '大社區', area: '高雄市' },
      { zip: '820', value: '岡山區', area: '高雄市' },
      { zip: '821', value: '路竹區', area: '高雄市' },
      { zip: '822', value: '阿蓮區', area: '高雄市' },
      { zip: '823', value: '田寮區', area: '高雄市' },
      { zip: '824', value: '燕巢區', area: '高雄市' },
      { zip: '825', value: '橋頭區', area: '高雄市' },
      { zip: '826', value: '梓官區', area: '高雄市' },
      { zip: '827', value: '彌陀區', area: '高雄市' },
      { zip: '828', value: '永安區', area: '高雄市' },
      { zip: '829', value: '湖內區', area: '高雄市' },
      { zip: '830', value: '鳳山區', area: '高雄市' },
      { zip: '831', value: '大寮區', area: '高雄市' },
      { zip: '832', value: '林園區', area: '高雄市' },
      { zip: '833', value: '鳥松區', area: '高雄市' },
      { zip: '840', value: '大樹區', area: '高雄市' },
      { zip: '842', value: '旗山區', area: '高雄市' },
      { zip: '843', value: '美濃區', area: '高雄市' },
      { zip: '844', value: '六龜區', area: '高雄市' },
      { zip: '845', value: '內門區', area: '高雄市' },
      { zip: '846', value: '杉林區', area: '高雄市' },
      { zip: '847', value: '甲仙區', area: '高雄市' },
      { zip: '848', value: '桃源區', area: '高雄市' },
      { zip: '849', value: '那瑪夏區', area: '高雄市' },
      { zip: '851', value: '茂林區', area: '高雄市' },
      { zip: '852', value: '茄萣區', area: '高雄市' },
    ],
    南海諸島: [
      { zip: '817', value: '東沙群島', area: '南海諸島' },
      { zip: '819', value: '南沙群島', area: '南海諸島' },
    ],
    澎湖縣: [
      { zip: '880', value: '馬公市', area: '澎湖縣' },
      { zip: '881', value: '西嶼鄉', area: '澎湖縣' },
      { zip: '882', value: '望安鄉', area: '澎湖縣' },
      { zip: '883', value: '七美鄉', area: '澎湖縣' },
      { zip: '884', value: '白沙鄉', area: '澎湖縣' },
      { zip: '885', value: '湖西鄉', area: '澎湖縣' },
    ],
    屏東縣: [
      { zip: '900', value: '屏東市', area: '屏東縣' },
      { zip: '901', value: '三地門鄉', area: '屏東縣' },
      { zip: '902', value: '霧台鄉', area: '屏東縣' },
      { zip: '903', value: '瑪家鄉', area: '屏東縣' },
      { zip: '904', value: '九如鄉', area: '屏東縣' },
      { zip: '905', value: '里港鄉', area: '屏東縣' },
      { zip: '906', value: '高樹鄉', area: '屏東縣' },
      { zip: '907', value: '鹽埔鄉', area: '屏東縣' },
      { zip: '908', value: '長治鄉', area: '屏東縣' },
      { zip: '909', value: '麟洛鄉', area: '屏東縣' },
      { zip: '911', value: '竹田鄉', area: '屏東縣' },
      { zip: '912', value: '內埔鄉', area: '屏東縣' },
      { zip: '913', value: '萬丹鄉', area: '屏東縣' },
      { zip: '920', value: '潮州鎮', area: '屏東縣' },
      { zip: '921', value: '泰武鄉', area: '屏東縣' },
      { zip: '922', value: '來義鄉', area: '屏東縣' },
      { zip: '923', value: '萬巒鄉', area: '屏東縣' },
      { zip: '924', value: '崁頂鄉', area: '屏東縣' },
      { zip: '925', value: '新埤鄉', area: '屏東縣' },
      { zip: '926', value: '南州鄉', area: '屏東縣' },
      { zip: '927', value: '林邊鄉', area: '屏東縣' },
      { zip: '928', value: '東港鎮', area: '屏東縣' },
      { zip: '292', value: '琉球鄉', area: '屏東縣' },
      { zip: '931', value: '佳冬鄉', area: '屏東縣' },
      { zip: '932', value: '新園鄉', area: '屏東縣' },
      { zip: '940', value: '枋寮鄉', area: '屏東縣' },
      { zip: '941', value: '枋山鄉', area: '屏東縣' },
      { zip: '942', value: '春日鄉', area: '屏東縣' },
      { zip: '943', value: '獅子鄉', area: '屏東縣' },
      { zip: '944', value: '車城鄉', area: '屏東縣' },
      { zip: '945', value: '牡丹鄉', area: '屏東縣' },
      { zip: '946', value: '恆春鎮', area: '屏東縣' },
      { zip: '947', value: '滿州鄉', area: '屏東縣' },
    ],
    台東縣: [
      { zip: '950', value: '台東市', area: '台東縣' },
      { zip: '951', value: '綠島鄉', area: '台東縣' },
      { zip: '952', value: '蘭嶼鄉', area: '台東縣' },
      { zip: '953', value: '延平鄉', area: '台東縣' },
      { zip: '954', value: '卑南鄉', area: '台東縣' },
      { zip: '955', value: '鹿野鄉', area: '台東縣' },
      { zip: '956', value: '關山鎮', area: '台東縣' },
      { zip: '957', value: '海端鄉', area: '台東縣' },
      { zip: '958', value: '池上鄉', area: '台東縣' },
      { zip: '959', value: '東河鄉', area: '台東縣' },
      { zip: '961', value: '成功鎮', area: '台東縣' },
      { zip: '962', value: '長濱鄉', area: '台東縣' },
      { zip: '963', value: '太麻里鄉', area: '台東縣' },
      { zip: '964', value: '金峰鄉', area: '台東縣' },
      { zip: '965', value: '大武鄉', area: '台東縣' },
      { zip: '966', value: '達仁鄉', area: '台東縣' },
    ],
    花蓮縣: [
      { zip: '970', value: '花蓮市', area: '花蓮縣' },
      { zip: '971', value: '新城鄉', area: '花蓮縣' },
      { zip: '972', value: '秀林鄉', area: '花蓮縣' },
      { zip: '973', value: '吉安鄉', area: '花蓮縣' },
      { zip: '974', value: '壽豐鄉', area: '花蓮縣' },
      { zip: '975', value: '鳳林鎮', area: '花蓮縣' },
      { zip: '976', value: '光復鄉', area: '花蓮縣' },
      { zip: '977', value: '豐濱鄉', area: '花蓮縣' },
      { zip: '978', value: '瑞穗鄉', area: '花蓮縣' },
      { zip: '979', value: '萬榮鄉', area: '花蓮縣' },
      { zip: '981', value: '玉里鎮', area: '花蓮縣' },
      { zip: '982', value: '卓溪鄉', area: '花蓮縣' },
      { zip: '983', value: '富里鄉', area: '花蓮縣' },
    ],
    金門縣: [
      { zip: '890', value: '金沙鎮', area: '金門縣' },
      { zip: '891', value: '金湖鎮', area: '金門縣' },
      { zip: '892', value: '金寧鄉', area: '金門縣' },
      { zip: '893', value: '金城鎮', area: '金門縣' },
      { zip: '894', value: '烈嶼鄉', area: '金門縣' },
      { zip: '896', value: '烏坵鄉', area: '金門縣' },
    ],
    連江縣: [
      { zip: '209', value: '南竿鄉', area: '連江縣' },
      { zip: '210', value: '北竿鄉', area: '連江縣' },
      { zip: '211', value: '莒光鄉', area: '連江縣' },
      { zip: '212', value: '東引鄉', area: '連江縣' },
    ],
  };

const TestUseState = () => {
    const [state, setState] = useState({city: null, township: null});

    const onClickOne = () => {
        console.log('onClickOne');
        setState({ city: 1 })
    }

    const onClickTwo = () => {
        console.log('onclickTwo');
        setState({ township: 2 })
    }

    const handelChange1 = () => {
        setState(prevState => ({ ...prevState, city: 1}))
    }
    const handelChange2 = () => {
        setState(prevState => ({ ...prevState, township: 2}))
    }
    
    return (
        <div>
            <div>
                <button onClick={ handelChange1 }>onClickOne</button>
                <button onClick={ handelChange2 }>onClickTwo</button>
            </div>
            {`${ state.city } and ${ state.township }`}
        </div>
    )
}

const City = () => {
    // SetState 
    const [city, setCity] = useState({city: null, township: null})
    const [selector, setSelector] = useState('');
    // get Key Object value
    let CityArr = Object.keys(CityData);
    // print Data in html 
    let CityArea = CityArr.map((city, index) => {
        return <option key={ index } value={ index }>{ city }</option>
    })
    // onChange Value will push value in Township
    const CityOnChange = (e) => {
        let getCityNum = e.target.value;
        let city = CityArr[getCityNum];
        setCity(prevState => ({ ...prevState, city: city }));
        let Township = [];
        for (let i = 0 ; i <= CityData[city].length-1; i ++) {
            Township.push(CityData[city][i].value) 
            setSelector(Township);
        }    
    }

    let Arr = null
    
    if(selector) {
        Arr = selector.map((item, index) => {
            return <option key={ index }>{ item }</option>
        })
    }

    const onArrChange = (e) => {
        console.log(e.target.value);
        let a = e.target.value
        setCity(prevState => ({ ...prevState, township: a }))         
    }

    return (
        <div className={ styles.selector }>
            <label htmlFor="city">
                Choose city:
            </label>
            <select id="city" onChange={ CityOnChange }>
                <option value="">選擇城市</option>
                { CityArea }
            </select>
            <select id="citys" onChange={ onArrChange }>
                <option value="">選擇鄉鎮</option>
                { Arr }
            </select>
            <div>目前選到 { `${city.city} 和 ${city.township}`}  </div>
        </div>
    )

}




const CssWorld = () => {
     
    const [state, setState] = useState(1);

    // add name method && edit null value
    const [value, setValue] = useState({ id: "", name: "", age: ""})
    const [status, setStatus] = useState('add')

    const submit = () => {
        if(status == 'add'){
            // pass by value
            dispatch(addOrder(value))
        } else {
            // edit reducer
            console.log('edit');
            dispatch(editOrder(value))
        }
        // resetValue
        setValue({ id: '', name: '', age: '' })
        setStatus('add')
    }

    // edit method
    const edit = (e) => {
        setValue({ name: getOrderData[e].name, id: e })    
        setStatus('edit')
    }

    // delete method 
    const deletes = (e) => {
        dispatch(deleteOrder(e));
        setStatus('add');
    }

    
    // input change method
    const handleChange = (e) => {
        const { id, value } = e.target;
        setValue(prevState => ({
            ...prevState, [id] : value
        }))
    }   



    // getRedux, state 代表是所有 store 裡面的值
    const getOrderData = useSelector(state => state.orderReducer);

    // get data 
    let lists = getOrderData.map((item, index) => {
        return <div key={ index } onClick={ () => {edit(index)} }>{ item.name } <button onClick={ () => { deletes(index)} }>DELETE</button> </div>
    })

    // dispatch method
    const dispatch = useDispatch();
    const getDataURL = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/AvailableSeatStatusList/1000?$top=1&$format=JSON'
    const getData = () => {
        fetch(getDataURL, {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    const data = {
        mainTitle : '企業融資申請',
        subTitle : {
            title: '取得營運資金拓展您的事業',
            subTitle: '只要您擁有公司營業證就符合申請資格，新創不是障礙。'
        },
        itmeContent : {
            first: {
                title: '快速線上審核',
                img: 'https://picsum.photos/100/100?random53',
                content: '最快48小時撥款'
            },
            second: {
                title: '最靈活',
                img: 'https://picsum.photos/100/100?random57',
                content: '克制您的融資方案'
            },
            third: {
                title: '最安全',
                img: 'https://picsum.photos/100/100?random85',
                content: '個資不外洩'
            }
        },
        productContent : {
            first: '產品說明',
            second: '關於中租',
            third: '關於融資'
        }
    }

    let content = null;
    switch(state) {
        case 1:
            content = <div>lias laboriosam maxime quaerat.</div>
            break
        case 2:
            content = <div>456</div>
            break;
        default: 
            content = <div>hi</div>
    }

    // 點擊指定位置
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) {
                anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
            }
        }
    }
    
    return (
        <div>
        <FoldableContent key="intro_profile" maxHeight="100px">
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
          <div>sasdasdasds</div>    
        </FoldableContent>
        <ToggleSelector/>
        <TestUseState/>
        <City/>
        {/* 閃爍 html  */}
        {/* <div className={ styles.centered }>
        <h1 className={ styles.neonEffect }>I love NEON</h1>
        <h1 className={ styles.neonEffect }>NEON effect is</h1>
        <h1 className={ styles.neonEffect}>Awesome</h1>
        </div> */}

        {/* input*/}
        <InputForms value={ value.name } onChange={ handleChange }/>
        
        {/* button */}
        <div className={ styles.button }>
            <button type="button" onClick={ submit }>add name</button>
        </div>

        {/* edit */}

        {/* list */}
        { lists }
        {/* <div className={ styles.getData }>
            { getOrderData.map((item, index) => (
                <div key={ index } onClick={ edit }>{ item.name }</div>
            )) }
        </div> */}
        
        <hr/>
            <div className={ styles.container }>
                <div className="jump" className={ styles.jump }>
                    <a onClick={ () => {
                        scrollToAnchor('tabBlock');
                    }}>ScrollDown</a>
                </div>
                
                <div className= { styles.getData }>
                    <button onClick={ () => { getData() }}>GETDATA</button>
                </div>
                <div className= { styles.mainTitle }>
                    <h5>{ data.mainTitle }</h5>
                </div>
                <section>
                    <div className={ styles.subTitle }>
                        <h5>{ data.subTitle.title }</h5>
                        <p>{ data.subTitle.subTitle }</p>
                    </div>
                    <div className={ styles.wrap }>
                        <div className={ styles.item }>
                            <h3>{ data.itmeContent.first.title }</h3>
                            <img src={ data.itmeContent.first.img }/>
                            <p>{ data.itmeContent.first.content }</p>
                        </div>
                        <div className={ styles.item }>
                            <h3>{ data.itmeContent.second.title }</h3>
                            <img src={ data.itmeContent.second.img }/>
                            <p>{ data.itmeContent.second.content }</p>
                        </div>
                        <div className={ styles.item }>
                            <h3>{ data.itmeContent.third.title }</h3>
                            <img src={ data.itmeContent.third.img }/>
                            <p>{ data.itmeContent.third.content }</p>
                        </div>
                    </div>
                </section>
                {/* product */}
                <div className={ styles.tabBlock }>
                        <div className={ styles.tab }>
                            <div className={ state == 1 ? styles.active : '' } onClick={ () => { setState(1) } }>{ data.productContent.first }</div>
                            <div className={ state == 2 ? styles.active : '' } onClick={ () => { setState(2) } }>{ data.productContent.second }</div>
                            <div className={ state == 3 ? styles.active : '' } onClick={ () => { setState(3) }}>{ data.productContent.third }</div>
                        </div>
                        <div className={ styles.content }>
                            { content }
                        </div>
                        <div id="tabBlock">
                            Hello
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CssWorld;