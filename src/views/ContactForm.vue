<template>
    <v-container class="mt-8">
        <v-content></v-content>
        <v-row dense justify="center" width="100%" class="mt-12">
            <v-col class="mt-5">
                <v-card elevation="15" class="pt-0 pb-5 px-10">
                    <v-spacer></v-spacer>
                    <v-layout class="display-1 pt-9" justify-center font-weight-bold>お問い合わせ</v-layout>
                    <v-layout class="title pa-3" justify-center font-weight-bold>お仕事のご依頼、ご相談(無料)などお気軽にご連絡下さい。</v-layout>
                    <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
                        <v-text-field
                                v-model="contactForm.name"
                                :rules="contactFormValidation.nameRules"
                                label="名前 (ニックネーム可)"
                                required></v-text-field>
                        <v-text-field
                                v-model="contactForm.email"
                                :rules="contactFormValidation.emailRules"
                                label="メールアドレス"
                                required></v-text-field>
                        <v-textarea
                                v-model="contactForm.contents"
                                :rules="contactFormValidation.contentsRules"
                                label="お問い合わせ内容をご記入ください"
                                required></v-textarea>
                        <v-btn
                                :loading="contactForm.loading"
                                :disabled="!contactFormValidation.valid"
                                @click="sendMail()"
                                color="indigo"
                                class="mt-4 font-weight-bold"
                                block large dark>送信</v-btn>
                    </v-form>
                </v-card>
                <v-snackbar
                        v-model="snackBar.show"
                        :color="snackBar.color"
                        :timeout="6000"
                        class="font-weight-bold"
                        bottom right>{{snackBar.message}}</v-snackbar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { functions } from '@/plugins/firebase'

    export default {
        data: () => ({
            contactForm: {
                name: '',
                email: '',
                contents: '',
                loading: false
            },
            contactFormValidation: {
                valid: false,
                nameRules: [v => !!v || '名前は必須項目です'],
                emailRules: [v => !!v || 'メールアドレスは必須項目です'],
                contentsRules: [v => !!v || '内容は必須項目です']
            },
            snackBar: {
                show: false,
                color: '',
                message: ''
            }
        }),
        methods: {
            sendMail: function () {
                if (this.$refs.form.validate()) {
                    this.contactForm.loading = true
                    const mailer = functions.httpsCallable('sendMail')

                    mailer(this.contactForm)
                        .then(() => {
                            this.formReset()
                            this.showSnackBar(
                                'success',
                                'お問い合わせありがとうございます。送信完了しました'
                            )
                        })
                        .catch(err => {
                            this.showSnackBar(
                                'error',
                                '送信に失敗しました。時間をおいて再度お試しください'
                            )
                            console.log(err)
                        })
                        .finally(() => {
                            this.contactForm.loading = false
                        })
                }
            },
            showSnackBar: function (color, message) {
                this.snackBar.message = message
                this.snackBar.color = color
                this.snackBar.show = true
            },
            formReset: function () {
                this.$refs.form.reset()
            }
        }
    }
</script>
<style scoped>
    main{
        padding: 96px 0 0;
    }
</style>
