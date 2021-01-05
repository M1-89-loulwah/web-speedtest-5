// قم بإنشاء الدالة التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

function greet(name) {
    if(name == null){
        console.log(`Hello`)

    }else{
        console.log(`Hello ${name}`)

    }
}

greet(`lolwa`);
greet();
