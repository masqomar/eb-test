<template>
    <Head>
        <title>{{ appName}} - Data User</title>
    </Head>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">User</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Data User</li>
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
                                <input type="text" v-model="search" class="form-control ps-5 radius-20" placeholder="Cari Berdasarkan Nama...."> <span class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
                            </div>
                        </form>
                        <div class="ms-auto">
                            <Link href="/admin/users/create" class="btn btn-primary mt-2 mt-lg-0"><i class="bx bxs-plus-square"></i> Tambah User</Link>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>Level</th>
                                    <th>Dibuat pada</th>
                                    <th>Status User</th>
                                    <th>Last Login</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users.data" :key="index">
                                    <td>{{ ++index + (users.current_page - 1) * users.per_page }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td><span class="badge bg-success">{{ user.level == 1 ? 'Admin' : 'Member' }}</span></td>
                                    <td>{{ user.created_at }}</td>
                                    <td>
                                        <span v-if="user.is_active == 1" class="badge bg-success">Active</span>
                                        <span v-else class="badge bg-danger">Non-active</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-danger">{{ user.last_login_at }}</span>
                                    </td>
                                    <td>
                                        <div class="d-flex order-actions">
                                            <Link :href="`/admin/users/${user.id}`" class="ms-2"><i class='bx bx-grid-alt'></i></Link>
                                            <Link :href="`/admin/users/${user.id}/edit`" class="ms-2"><i class='bx bxs-edit'></i></Link>
                                            <a href="#" @click.prevent="destroy(user.id)" class="ms-2"><i class="bx bxs-trash"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Pagination :links="users.links" align="end" />

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
            users: Object
        },

        // initialization composition API
        setup() {
            // define state search
            const search = ref('' || (new URL(document.location)).searchParams.get('search'));

            // define method search
            const handleSearch = () => {
                Inertia.get('/admin/users', {
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

                        Inertia.delete(`/admin/users/${id}`);

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'User Berhasil Dihapus!.',
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
