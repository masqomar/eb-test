<template>
    <Head>
        <title>{{ appName }} - Tambah Judul Soal</title>
    </Head>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Judul Soal</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Tambah Judul Soal</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->

            <div class="card">
                <div class="card-body">
                    <div class="d-lg-flex align-items-center">
                        <div class="ms-auto">
                            <Link href="/admin/question-titles" class="btn btn-primary mt-2 mt-lg-0">Kembali</Link>
                        </div>
                    </div>
                    <form @submit.prevent="submit" class="row g-3">
                        <div class="col-12">
                            <label class="form-label">Kategori</label>
                            <select v-model="form.category_id" :class="{ 'is-invalid': errors.category_id }" class="form-select">
                                <option value="">[ Pilih ]</option>
                                <option v-for="(category, index) in categories" :key="index" :value="category.id">
                                    {{ category.name }}</option>
                            </select>
                            <div v-if="errors.category_id" class="invalid-feedback">
                                {{ errors.category_id }}
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="form-label">Judul Soal</label>
                            <input type="text" class="form-control" v-model="form.name" :class="{ 'is-invalid': errors.name }" placeholder="Judul Soal">
                            <div v-if="errors.name" class="invalid-feedback">
                                {{ errors.name }}
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="form-label">Jumlah Pilihan</label>
                            <input type="number" class="form-control" v-model="form.total_choices" :class="{ 'is-invalid': errors.total_choices }" placeholder="Jumlah Pilihan">
                            <div v-if="errors.total_choices" class="invalid-feedback">
                                {{ errors.total_choices }}
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="form-label">Jumlah Sesi</label>
                            <input type="number" class="form-control" v-model="form.total_section" :class="{ 'is-invalid': errors.total_section }" placeholder="Jumlah Sesi">
                            <div v-if="errors.total_section" class="invalid-feedback">
                                {{ errors.total_section }}
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="form-label">Tambahkan Kategori Penilaian</label>
                            <select v-model="form.add_value_category" :class="{ 'is-invalid': errors.add_value_category }" class="form-select">
                                <option value="">[ Pilih ]</option>
                                <option value="0">Tidak</option>
                                <option value="1">Ya</option>
                            </select>
                            <div v-if="errors.add_value_category" class="invalid-feedback">
                                {{ errors.add_value_category }}
                            </div>
                        </div>

                        <div class="col-12" v-if="form.add_value_category == 1">
                            <label class="form-label">Jenis Penilaian</label>
                            <select v-model="form.assessment_type" :class="{ 'is-invalid': errors.assessment_type }" class="form-select">
                                <option value="">[ Pilih ]</option>
                                <option value="1">Dihitung Per Kategori Penilaian</option>
                            </select>
                            <div v-if="errors.assessment_type" class="invalid-feedback">
                                {{ errors.assessment_type }}
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="form-label">Tampilkan Koreksi Jawaban</label>
                            <select v-model="form.show_answer" :class="{ 'is-invalid': errors.show_answer }" class="form-select">
                                <option value="">[ Pilih ]</option>
                                <option value="0">Tidak</option>
                                <option value="1">Ya</option>
                            </select>
                            <div v-if="errors.show_answer" class="invalid-feedback">
                                {{ errors.show_answer }}
                            </div>
                        </div>

                        <div class="col-12" v-if="form.show_answer == 1">
                            <label class="form-label">Minimal Nilai Untuk Melihat Jawaban</label>
                            <input type="number" class="form-control" v-model="form.minimum_grade" :class="{ 'is-invalid': errors.minimum_grade }" placeholder="Minimal Nilai Untuk Melihat Jawaban">
                            <div v-if="errors.minimum_grade" class="invalid-feedback">
                                {{ errors.minimum_grade }}
                            </div>
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btn-primary px-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--end page wrapper -->
</template>

<script>
    //import layout admin
    import LayoutAdmin from '../../../../Layouts/Layout.vue';

    // import Link
    import { Link } from '@inertiajs/inertia-vue3';

    //import reactive
    import { reactive } from 'vue';

    // import Swal
    import Swal from 'sweetalert2';

    // import Head from Inertia
    import {
        Head
    } from '@inertiajs/inertia-vue3';

    import { Inertia } from '@inertiajs/inertia';

    //import axios
    import axios from 'axios';

    export default {
        // layout
        layout: LayoutAdmin,

        // register components
        components: {
            Link,
            Head,
        },

        //props
        props: {
            errors: Object,
            categories: Object
        },

        // initialization composition API
        setup() {
            const form = reactive({
                category_id: '',
                name: '',
                total_choices: '',
                total_section: '',
                add_value_category: '',
                assessment_type: '',
                show_answer: '',
                minimum_grade: '',
            });

            // submit method
            const submit = () => {
                // send data to server
                Inertia.post('/admin/question-titles', {
                    // data
                    category_id: form.category_id,
                    name: form.name,
                    total_choices: form.total_choices,
                    total_section: form.total_section,
                    add_value_category: form.add_value_category,
                    assessment_type: form.assessment_type,
                    show_answer: form.show_answer,
                    minimum_grade: form.minimum_grade,
                }, {
                    onSuccess: (response) => {
                        console.log(response);
                        //show success alert
                        Swal.fire({
                            title: 'Success!',
                            text: 'Judul Soal Berhasil Disimpan!.',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    },
                });
            }

            // return form state and submit method
            return {
                form,
                submit,
            }
        }
    }
</script>
