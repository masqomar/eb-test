<template>
    <Head>
        <title>{{appName}} - Data Pengumuman</title>
    </Head>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Pengumuman</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Data Pengumuman</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->

            <div class="card">
                <div class="card-body">
                    <div class="d-lg-flex align-items-center mb-4 gap-3">
                        <form @submit.prevent="handleSearch">
                            <div class="position-relative">
                                <input type="text" v-model="search" class="form-control ps-5 radius-20" placeholder="Cari Berdasarkan Judul...."> <span class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
                            </div>
                        </form>
                        <div class="ms-auto">
                            <Link href="/admin/announcements/create" class="btn btn-primary mt-2 mt-lg-0"><i class="bx bxs-plus-square"></i> Tambah Pengumuman</Link>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>No</th>
                                    <th>Judul</th>
                                    <th>Dibuat pada</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td align="center" colspan="4" v-if="!announcements.data.length">Data Pengumuman kosong</td>
                                </tr>
                                <tr v-for="(announcement, index) in announcements.data" :key="index">
                                    <td>
                                        {{ ++index + (announcements.current_page - 1) * announcements.per_page }}
                                    </td>
                                    <td>{{ announcement.title }}</td>
                                    <td>{{ announcement.created_at }}</td>
                                    <td>
                                        <div class="d-flex order-actions">
                                            <Link :href="`/admin/announcements/${announcement.id}`" class="ms-2"><i class='bx bx-grid-alt'></i></Link>
                                            <Link :href="`/admin/announcements/${announcement.id}/edit`" class="ms-2"><i class='bx bxs-edit'></i></Link>
                                            <a href="#" @click.prevent="destroy(announcement.id)" class="ms-2"><i class="bx bxs-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Pagination :links="announcements.links" align="end" />

                </div>
            </div>
        </div>
    </div>
    <!--end page wrapper -->
</template>

<script>
    //import layout admin
    import LayoutAdmin from '../../../../Layouts/Layout.vue';

    //import component pagination
    import Pagination from '../../../../Components/Pagination.vue';

    // import Link
    import { Link } from '@inertiajs/inertia-vue3';

    //import sweet alert2
    import Swal from 'sweetalert2';

    //import ref from vue
    import {
        ref
    } from 'vue';

    // import Head from Inertia
    import {
        Head
    } from '@inertiajs/inertia-vue3';

    import { Inertia } from '@inertiajs/inertia';

    export default {
        // layout
        layout: LayoutAdmin,

        // register components
        components: {
            Link,
            Head,
            Pagination
        },

        // props
        props: {
            announcements: Object
        },

        // initialization composition API
        setup() {
            // define state search
            const search = ref('' || (new URL(document.location)).searchParams.get('search'));

            // define method search
            const handleSearch = () => {
                Inertia.get('/admin/announcements', {
                    //send params "search" with value from state "search"
                    search: search.value,
                })
            }

            const destroy = (id) => {
                Swal.fire({
                    title: 'Apakah Anda yakin?',
                    text: "Anda tidak akan dapat mengembalikan ini!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Hapus'
                })
                .then((result) => {
                    if (result.isConfirmed) {

                        Inertia.delete(`/admin/announcements/${id}`);

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Pengumuman Berhasil Dihapus!.',
                            icon: 'success',
                            timer: 1000,
                            showConfirmButton: false,
                        });
                    }
                })
            }

            return {
                search,
                handleSearch,
                destroy
            }
        }
    }
</script>
