import moment from "moment-timezone";

moment.updateLocale(moment.locale(), { invalidDate: "-" });

export const formatDate = (date) => moment(date).format("DD/MM/YYYY");

