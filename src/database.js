import { Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-35-172-16-31.compute-1.amazonaws.com',
    user:'tntfetzzyzmcjv',
    password:'e2a2617396f56a73b3826c2080ba852a5c06ef9e667e6f4844be9fd46404cd16',
    database:'d529grg93tb1gq',
    port:5432,
    ssl:{rejectUnauthorized:false}
});