'use strict';

const setCookie = (name, value, exp) => {
	const date = new Date();
	date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
	document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

const getCookie = (name) => {
	const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return value? value[2] : null;
};

const delCookie = (name) => {
	document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

const modal_alert = (msg = '', target = '') => {
	const obj = target === '' ? $('#modal-alert') : $(target);

	if (obj.length != 0) {
		obj.find('.modal-body').html(msg);
		obj.modal('show');
	}
};

const convertNumberStr = (number = 0, prefix = '', suffix = '') => {
	let str = typeof number === 'string' ? new Intl.NumberFormat().format(parseInt(number)) : new Intl.NumberFormat().format(number);
	return `${prefix}${str}${suffix}`;
};

const convertDateStr = (time = new Date(), type = 'full', separator = { date: '-', time: ':' }) => {
	const date = time === 'object' ? time : new Date(time);
	const dateSeparator = typeof separator === 'string' ? separator : separator.date;
	const timeSeparator = typeof separator === 'string' ? separator : separator.time;
	let m, d, y, h, mm, s;

	if (type === 'full' || type === 'date') {
		m = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
		d = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;
		y = date.getFullYear();
	}

	if (type === 'full' || type === 'time') {
		h = date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`;
		mm = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
		s = date.getSeconds() > 10 ? date.getSeconds() : `0${date.getSeconds()}`;
	}

	switch (type) {
		case 'date': return `${[y, m, d].join(dateSeparator)}`;
		case 'time': return `${[h, mm, s].join(timeSeparator)}`;
		default: return `${[y, m, d].join(dateSeparator)} ${[h, mm, s].join(timeSeparator)}`;
	}
};

const CODE = {
	rptStatusCd: {
		'SR': '초기데이터입력',
		'SP': '송신요청',
		'SS': '송신성공',
		'SF': '송신실패',
		'RS': '수신성공',
		'RF': '수신실패',
		'MC': '수기완료'
	},
	rptProcType: {
		'00': '전송',
		'01': '도착오류',
		'02': '가접수증서',
		'03': '접수증서',
		'04': '재보고수신',
		'05': '추가자료요청수신'
	},
	rptMsgTypeCd: {
		'01': '보고(공통)',
		'02': '정정(C)',
		'03': '취소(C)',
		'04': '재보고(S)',
		'05': '추가자료',
		'96': '모의재보고(S)',
		'97': '모의취소(C)',
		'98': '모의정정(C)',
		'99': '모의보고(공통)'
	},
	rptResCd: {
		'000': '성공',
		'001': '전자서명 오류',
		'002': '문서번호 중복',
		'003': '복호화 오류',
		'004': '정합성 검증오류',
		'099': '기타',
		'910': '시스템 명칭 오류',
		'911': '보고기관코드 오류',
		'912': '전문종별코드 오류',
		'915': '계속 여부 오류',
		'920': '서비스 불가능 상태 오류',
		'921': '업무가 개시 되지 않은 상태임',
		'922': '사용자ID 오류',
		'923': '문서번호중복 오류',
		'999': '기타오류'
	}
};

const isId = (value = '') => {
	const reg = /^[a-z]+[a-z0-9]{4,12}$/g;

	return reg.test(value);
};

const isName = (value = '') => {
	const reg = /^[가-힣]{2,5}$/g;

	return reg.test(value);
};

const isEmail = (value = '') => {
	const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return reg.test(value);	
};

const isPassword = (value = '') => {
	const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/g;

	return reg.test(value);
};

const userValidMsg = {
	validId: '아이디는 영문시작 + 숫자 혼합 5~12자',
	validName: '이름은 한글 2~5자',
	validPw: '비밀번호는 영문 + 숫자 + 특문 혼합 8~15자'
};