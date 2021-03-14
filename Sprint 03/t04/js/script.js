let houseMixin = {
    wordReplace(spec_word, rep_word) {
        this.houseBluprint.description = this.houseBluprint.description.replace(spec_word, rep_word);
    },
    wordInsertAfter(spec_word, ins_word) {
        this.houseBluprint.description = this.houseBluprint.description.replace(spec_word, spec_word + ' ' + ins_word);
    },
    wordDelete(spec_word) {
        this.houseBluprint.description = this.houseBluprint.description.replace(' ' + spec_word, '');
    },
    wordEncrypt() {
        var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        var index = x => input.indexOf(x);
        var translate = x => index(x) > -1 ? output[index(x)] : x;
        this.houseBluprint.description = this.houseBluprint.description.split('').map(translate).join('');
    },
    wordDecrypt() {
        var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        var index = x => output.indexOf(x);
        var translate = x => index(x) > -1 ? input[index(x)] : x;
        this.houseBluprint.description = this.houseBluprint.description.split('').map(translate).join('');
    }
}
