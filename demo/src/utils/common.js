export const cx = (...classes) => {
    return classes.filter(c => !!c).join(' ');
};
