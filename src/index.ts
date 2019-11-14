export const useSetter = <T> (value : T) => {
    const a = {
        set setB(value :T){
            this.B = value
        },
        B: value
    }
};
