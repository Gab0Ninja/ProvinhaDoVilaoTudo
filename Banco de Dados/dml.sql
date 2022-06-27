use BD_vilao;

insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poder)
	values('Kaido', 'Derrotou Oden, os 9 bainhas, derrotou luffy e mais diversos personagens e figurantes', TRUE);
    
SELECT id_vilao,
	   nm_vilao ,
	   ds_maldades,
	   bt_super_poder
FROM tb_vilao ;

select * from tb_vilao
