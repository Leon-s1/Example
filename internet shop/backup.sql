PGDMP     ;                
    z            postgres    14.5    14.5 Y    b           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            c           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            d           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            e           1262    13754    postgres    DATABASE     e   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE postgres;
                postgres    false            f           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3429                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            g           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16536    basket_products    TABLE     �   CREATE TABLE public.basket_products (
    quantity integer DEFAULT 1,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    basket_id integer NOT NULL,
    product_id integer NOT NULL
);
 #   DROP TABLE public.basket_products;
       public         heap    postgres    false            �            1259    16540    baskets    TABLE     �   CREATE TABLE public.baskets (
    id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.baskets;
       public         heap    postgres    false            �            1259    16543    baskets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public          postgres    false    213            h           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
          public          postgres    false    214            �            1259    16544    brands    TABLE     �   CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.brands;
       public         heap    postgres    false            �            1259    16547    brands_id_seq    SEQUENCE     �   CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.brands_id_seq;
       public          postgres    false    215            i           0    0    brands_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;
          public          postgres    false    216            �            1259    16548 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    16551    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    217            j           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    218            �            1259    16397 	   merchants    TABLE     |   CREATE TABLE public.merchants (
    id integer NOT NULL,
    name character varying(30),
    email character varying(30)
);
    DROP TABLE public.merchants;
       public         heap    my_user    false            �            1259    16396    merchants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.merchants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.merchants_id_seq;
       public          my_user    false    211            k           0    0    merchants_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.merchants_id_seq OWNED BY public.merchants.id;
          public          my_user    false    210            �            1259    16552    order_items    TABLE       CREATE TABLE public.order_items (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    quantity integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    order_id integer
);
    DROP TABLE public.order_items;
       public         heap    postgres    false            �            1259    16555    order_items_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.order_items_id_seq;
       public          postgres    false    219            l           0    0    order_items_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.order_items_id_seq OWNED BY public.order_items.id;
          public          postgres    false    220            �            1259    16556    orders    TABLE     �  CREATE TABLE public.orders (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    amount integer NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    comment character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_id integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16562    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    221            m           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    222            �            1259    16563    product_props    TABLE       CREATE TABLE public.product_props (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    value character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    product_id integer
);
 !   DROP TABLE public.product_props;
       public         heap    postgres    false            �            1259    16568    product_props_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_props_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.product_props_id_seq;
       public          postgres    false    223            n           0    0    product_props_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.product_props_id_seq OWNED BY public.product_props.id;
          public          postgres    false    224            �            1259    16569    products    TABLE     \  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    rating integer DEFAULT 0,
    image character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    category_id integer,
    brand_id integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16575    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    225            o           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    226            �            1259    16576    ratings    TABLE     �   CREATE TABLE public.ratings (
    rate integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    product_id integer NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.ratings;
       public         heap    postgres    false            �            1259    16579    users    TABLE     %  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16585    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    228            p           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    229            �           2604    16586 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            �           2604    16587 	   brands id    DEFAULT     f   ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);
 8   ALTER TABLE public.brands ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    16588    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    16400    merchants id    DEFAULT     l   ALTER TABLE ONLY public.merchants ALTER COLUMN id SET DEFAULT nextval('public.merchants_id_seq'::regclass);
 ;   ALTER TABLE public.merchants ALTER COLUMN id DROP DEFAULT;
       public          my_user    false    210    211    211            �           2604    16589    order_items id    DEFAULT     p   ALTER TABLE ONLY public.order_items ALTER COLUMN id SET DEFAULT nextval('public.order_items_id_seq'::regclass);
 =   ALTER TABLE public.order_items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    16590 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            �           2604    16591    product_props id    DEFAULT     t   ALTER TABLE ONLY public.product_props ALTER COLUMN id SET DEFAULT nextval('public.product_props_id_seq'::regclass);
 ?   ALTER TABLE public.product_props ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �           2604    16592    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            �           2604    16593    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228            N          0    16536    basket_products 
   TABLE DATA           b   COPY public.basket_products (quantity, created_at, updated_at, basket_id, product_id) FROM stdin;
    public          postgres    false    212   �h       O          0    16540    baskets 
   TABLE DATA           =   COPY public.baskets (id, created_at, updated_at) FROM stdin;
    public          postgres    false    213   �h       Q          0    16544    brands 
   TABLE DATA           B   COPY public.brands (id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    215   �j       S          0    16548 
   categories 
   TABLE DATA           F   COPY public.categories (id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    217   ak       M          0    16397 	   merchants 
   TABLE DATA           4   COPY public.merchants (id, name, email) FROM stdin;
    public          my_user    false    211   Pl       U          0    16552    order_items 
   TABLE DATA           b   COPY public.order_items (id, name, price, quantity, created_at, updated_at, order_id) FROM stdin;
    public          postgres    false    219   ~l       W          0    16556    orders 
   TABLE DATA           {   COPY public.orders (id, name, email, phone, address, amount, status, comment, created_at, updated_at, user_id) FROM stdin;
    public          postgres    false    221   nm       Y          0    16563    product_props 
   TABLE DATA           \   COPY public.product_props (id, name, value, created_at, updated_at, product_id) FROM stdin;
    public          postgres    false    223   �n       [          0    16569    products 
   TABLE DATA           q   COPY public.products (id, name, price, rating, image, created_at, updated_at, category_id, brand_id) FROM stdin;
    public          postgres    false    225   *v       ]          0    16576    ratings 
   TABLE DATA           T   COPY public.ratings (rate, created_at, updated_at, product_id, user_id) FROM stdin;
    public          postgres    false    227   v~       ^          0    16579    users 
   TABLE DATA           R   COPY public.users (id, email, password, role, created_at, updated_at) FROM stdin;
    public          postgres    false    228   �~       q           0    0    baskets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.baskets_id_seq', 47, true);
          public          postgres    false    214            r           0    0    brands_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.brands_id_seq', 18, true);
          public          postgres    false    216            s           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 16, true);
          public          postgres    false    218            t           0    0    merchants_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.merchants_id_seq', 2, true);
          public          my_user    false    210            u           0    0    order_items_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.order_items_id_seq', 8, true);
          public          postgres    false    220            v           0    0    orders_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.orders_id_seq', 4, true);
          public          postgres    false    222            w           0    0    product_props_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.product_props_id_seq', 182, true);
          public          postgres    false    224            x           0    0    products_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.products_id_seq', 121, true);
          public          postgres    false    226            y           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public          postgres    false    229            �           2606    16595 $   basket_products basket_products_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT basket_products_pkey PRIMARY KEY (basket_id, product_id);
 N   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT basket_products_pkey;
       public            postgres    false    212    212            �           2606    16597    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public            postgres    false    213            �           2606    16599    brands brands_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);
 @   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_name_key;
       public            postgres    false    215            �           2606    16601    brands brands_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public            postgres    false    215            �           2606    16603    categories categories_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_name_key;
       public            postgres    false    217            �           2606    16605    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    217            �           2606    16402    merchants merchants_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.merchants
    ADD CONSTRAINT merchants_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.merchants DROP CONSTRAINT merchants_pkey;
       public            my_user    false    211            �           2606    16607    order_items order_items_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.order_items DROP CONSTRAINT order_items_pkey;
       public            postgres    false    219            �           2606    16609    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    221            �           2606    16611     product_props product_props_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.product_props
    ADD CONSTRAINT product_props_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.product_props DROP CONSTRAINT product_props_pkey;
       public            postgres    false    223            �           2606    16613    products products_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.products DROP CONSTRAINT products_name_key;
       public            postgres    false    225            �           2606    16615    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    225            �           2606    16617    ratings ratings_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (product_id, user_id);
 >   ALTER TABLE ONLY public.ratings DROP CONSTRAINT ratings_pkey;
       public            postgres    false    227    227            �           2606    16619    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    228            �           2606    16621    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    228            �           2606    16622 .   basket_products basket_products_basket_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT basket_products_basket_id_fkey FOREIGN KEY (basket_id) REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT basket_products_basket_id_fkey;
       public          postgres    false    213    3231    212            �           2606    16627 /   basket_products basket_products_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT basket_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT basket_products_product_id_fkey;
       public          postgres    false    212    3249    225            �           2606    16632 %   order_items order_items_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.order_items DROP CONSTRAINT order_items_order_id_fkey;
       public          postgres    false    219    3243    221            �           2606    16637    orders orders_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    3255    228    221            �           2606    16642 +   product_props product_props_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_props
    ADD CONSTRAINT product_props_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public.product_props DROP CONSTRAINT product_props_product_id_fkey;
       public          postgres    false    223    225    3249            �           2606    16647    products products_brand_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_brand_id_fkey FOREIGN KEY (brand_id) REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 I   ALTER TABLE ONLY public.products DROP CONSTRAINT products_brand_id_fkey;
       public          postgres    false    225    215    3235            �           2606    16652 "   products products_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.products DROP CONSTRAINT products_category_id_fkey;
       public          postgres    false    217    3239    225            �           2606    16657    ratings ratings_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.ratings DROP CONSTRAINT ratings_product_id_fkey;
       public          postgres    false    3249    225    227            �           2606    16662    ratings ratings_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.ratings DROP CONSTRAINT ratings_user_id_fkey;
       public          postgres    false    3255    228    227            N      x������ � �      O   �  x�}�I�� �u���(�����?G�Y�Nr����B2��7�w�_\&ٔ�����~!Јu�@i-�-�M+8���BP#w�2��B���n�̭=��)�ғ�J0��W�IR���JT��PJ��J@Uf!Ւ�B@���%)�J@��*��dŕ�bӘ]B#9���^]�D�R�^�Տ���Qu
a+��t U̓o�Q��v灀Ʃ���o.�c�LQ}P�<�}�7�R�ki1��D�Y|7�>7�}n�幛�-��P�qt�N�5j�����N���T�J�pO����|�Ht�C�@��i_$�̔��d�B��Y�5�� ?������@$j�j��(�SͰ�<x�Em�;2��	�F�����$���l?������3��~T~_����|z����>���x��@KP�.MLb �h�j��}'�rT�g��M��ʦ��o�a�Fwը�ڏPO��ZP*�TH���h�*���8�@�Q�Q������3      Q   �   x�}�;�0k�鑭����	�CAAcPD\$)�'AH�����7;����X�A2�z�(��~��Ns���ݰ [f�� ��MC�����E�~�d`>� B!������[��_}p�����@]���g�V�����V����(n��>Y��L:B�      S   �   x�m�AN�0е}��Q,��c'>��*��H�+DDDh��}#�)��<��k���&,:o��K�գa����:���˔�|n�^�t�k4:��`��/����\pޢbr��-E��PB*>��JE�'����r�$7��z�[$\Ļ(C���U/Yt޵�Rq���_0��Mx�(;I��I[�=���V�1uk��?���C���Pt��/�_d�
�/      M      x�3��������9z���\1z\\\ p��      U   �   x�}�=k�0���+�����N�&Cp��4����C�c�����i	iB�rz9�~��N���}r�@�ȼDYR��ڐZ�&r^�ݍ���C�Ƞb"5J�J�#����J���D<=�sy:M�p���ą߮�������;P�[uϓ�����^��~6Ĳ�ov��i�&_�1�̭jcv��:Rg��D�O}� �nP�Y�T�b]������_�7��bD�zV�l��s���n�      W   *  x�ő;N1@k�.�����w+N�	�D�"�JOB�	�Q�Iv�\a|#f-@�|Z$[�xf��Ɋ��x(a��	������bz:�/�tF���H�{�X�������4qX�j��-T�o�]\ �j�[�������{�� �3��R�ЙtL�Bx���WJS��Rr4�wxFJǶ1�1xIs��M�q��V�fߕ�qq+���S���K�
qh��P�>&���d|�E:�ǜ5�V��U�>]�i~�gEڇ6��k�������S�P�0�{g;"ݔ�CN)}�2      Y   r  x��Z�nE]����
DҩgW���DAvlD�RL$$��bAX!D �B;v<�����[���}k�a���9�s��s�1�")�,&�IZ���aqR�/v��r�8�����m��~���O�׉`B\d�"�S�FZ���4��232���I�+(��{T� �cZ���Nx�Pǵt���ZcЂwJD�"����N�ߋ��1L��8A��b�����U� &27iq��q%�(�I��q�11x�d̒5iJ��Z�Ѳs���Qr�p�3���~��l".$j%�*%dKˇ�t\��A��s���W*�$�ȸ��+�F�w����^\�sWĩy�s��jFLf�*^1v�-�)�|�dv!�5o��RPq�B���B1�D5��+�F)�ۆ����v!�h�ǆm�Tm��y�P𑴙�^ ��܂6l	�hq���a�1XGz�������nA!1�s��8�����oh�v@���Ŋf�L&e�.d(�E�X3R^�B(���Ś��bBzsV/jI��Ѣ��n�:�J��.�����-* 5/�.�%9;;J5.�Ԟ'�,E��F"m�b�T;��p�˳�1�jX����c ���׎�	�ya� BI=�� ���v �l-���w��./��Pl�U�ы�
 �f�����0�#�	�N�~+}�Ö	,v�N���H !=4�?�t�&��v�az�jd�D��"H�H��^�b�\�ÝekJ
a"&:��
<\��=,��FZ�Ԑw?M	,Z�B*��Eh��*@�_� �7z����OC-�B9)�|H�	lÈ�E�T*�c��Ĕ���?K����� ം��;�VVoݻ�BٖWVWW��2�����k(�)�J��07�1��6�g���M�;��֌��V$AfL�}�)�1VmY؞Me&���K£��e��I����'�&4�蠹������IT�$O�q�%�#�ɢ���	������V���b��n�"�-j�����&��SI�8�ư�Z��,3��� r�5����A':N:Q�יd�i�eċ԰�H�ÚH��v�3�Dë��a��u��}��`��^9����A��xz�#�3���B.��Psx_��q�r�=�Ώ��J:1�	F��!w�`�/�i�闊��I�|�k)Q8ֳ�Cht!���h�])�����[���"��`B;�`����e?S?�5qZ��F����������^e��`sB3i� q�y���5�m�usJ>^��v�ٷ���K�N�ú� ����i���
&�Z��{�
��V@�z�Uk;��b��庴�ל��w���=�N�l���zҟ��U��X��q�����'9�����xy����	�s���?�C_�_��o[2�.���d��ķ�*�pS@(�Z;� �:h��8�џv�P�@^-�^d��n����+�C������O࠿� Ԃx�\��@���W�YŨ���n}a����".�WI��Y�g^U��@	�S8e0��%�
@�ٸ�l�\.�ˁ�#���ۅ�9�&2S�P۬.��]��!3����'�f�!6U3&�&�zAB-���g��L����Z�-�6;3�\�C���agF�!If�w�;��9�2Өۃ ��._O�L�Et� B�hjJ����RS��"���q�i���ɧ����*��m#�p$Т�m��	̮	��9����|��=Ln��aZ�|���65��ͭ;��]]��U��5Ή7:q��v�7��m���������������so�p:"t�L�ᎱUB��G�����|<�	�`�A��.�w|�y���U|�W.�+�ԕ��'�i�A�C�~�---��k̶      [   <  x�}X�n#�<����],��Y���Zk4�<�#� a�K=�1�����Mj�dۀ�KB�̬̈Hz7=��:�����b��&u�Hq�EI�������8U㽙�����I�֊�"�c�[ٓ�M��!�����>;��<&F
vk9pi}`7%�i�{��6�L��	�kl�g�g?G�¾-��{���^�sb�LQ�x�$ꠐLP�ؤ�I&lak�#��\c��v�����GCd��Q����Z.u��j���7�P��}������gm������0�����~�|�trR�	Een-Z�����S�Ps���r�'3���!c_[�����O=�����i�&����u����‷*�!�j��;ݸ�-x�=����w{��F�6�%x&=}~V���A�~z~��d�:��K��R((�h�����Kp�����=��u�����ғ%'�1���1W��^	َY'�l,�9a��Q�5����<����K�D��&�qŮ�c�cV�v<GV97R%��ZE����+�ٓ�i��ȊlQ��`9�:+NKP�׎�{Q!�����F[��ڱ���<����YhEv�ˎy���?����>��¤�)��Cg,�U�Ψԛ�U��b��(=���bͯCfd��>����/��9�����ء�1c L!�[�&yt�\�Ă��i�g����߾�>~C��'��<�q�0���j�C�J�;�Jb�Bʆ�I��:�����.Bk����	��n���$*@N@��TETrl����1��q{r3��^����_� h��ow�~���:����-��bU��у���j*�P:���X|7��������� 0�ޙk=���vi(ϣ�����s3V>�v��=7Ho0K������u3�cx��8=�sO������Y8�����{�������%쑗B�K������}#4(�y�O_ӿ������0��|:����8�u��bv�iRmm����]�W+p2K�5���+�xb*�+��!�u+��5Ք^"H�6�e�a��o��Z��	�Q���M��$�z6c��ܲ")6���/�Eq{~���@�FrJ��ݛo_��Y֧Yp,���5�=� �P )�NILc��D�}H���+��`���={��sʻCX_B����%F�%���5E��`"/�M�L����Wd|�%w��_tm�U��u����AŨz�"U�[��Ug$lw!�gEK������?e��K��H�x�n�Xיa�c�P'_�LQ�r䇭�{����g�?LJugO{x ꜋���DHHO+oP���7H 2ZL�2p���#�����>�h���	z�\g���(L.$ћxhX�߀��Ƴ��&}��Noo�g�'1� %����}��VMK��E��X<|�۳�o��yh�!;�᯼C4��V��B����y� ;�+�~
�Y�Ͳ��z�O��5�jƅ��>���t��'O�W��6n�CY���a�*RH�[X���鹬}�vKcЍ�K��x�Y�K�I�zz/�L�Ѓ���Z�U�j��w_���-W�"vΖ�e k����24�����r���I��ۊ�Yb�q���i��wm�������3���{�P�v���fzo���ӈ��ҵ�Ze7�h�=Z�U�:{�lv��.���Y��Yh ����w.���i��7<Έ��	��L�p7	Ě���.�Mz��2i�XAN�.�,��h���s�v�V��� �'a����i����hA��m:\��#^?�Eh�v��3f�=jsxìw�˰޵a�x(;aÂ�Q�Y�k�}7���u�[��Yh\s7��ك<����Y[�d�CU��%�y`w8\p�*Z��Bp�WlzZ���<�p��<˭�ݪ�<x"vJ��{���Ɛ�lҋg2E��V�8=?�~~/����ll�Y�pq���8.��BJ/�J	� �cf��qM�ᦰ{����������?��|ݱ^Lq�Y�3FF�um�n�(;�2	����]����x�Q<p�P+��j�T+(�FWL���b|i�j\��?��l��Yh��������,yH\      ]      x������ � �      ^   E  x�}��r�@ Ek��v�e�]�*"(>B�H&�A1���31E�8�Oq�=�i�z��i��顠I��.�L-�2o��z�	�� �/�ā/���Q�'�h�tŌmiKA��y�G�eBe��#�A����.-:)U�F���u�Ֆ��!�C������[�Di��ה��S�wM�^�y@��G��Xz�nEN�v�Ѝf�ȩ��)�%�M��'4�'�(K]m0֤�H�����	rCH&H�v=�K~�tD�R���p�N{��ιj�����l�	�g-�7w�هqs���Н"W�},�~�Ώ     