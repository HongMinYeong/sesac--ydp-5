// 통신을 위한 model 불러오기
const { Player, Profile, Team } = require('../models');
const { Op } = require('sequelize');
// TODO: 컨트롤러

exports.index = (req, res) => {
  res.render('index');
};
// 전체 선수 조회
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    res.send('Internal Server Error!');
  }
};
// 특정 선수 조회
exports.getPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const player = await Player.findOne({
      // player_id를 params 객체에서 꺼내온 애
      where: { player_id: player_id },
    });
    res.send(player);
  } catch (err) {
    res.send('Internal Server Error!');
  }
};
// 선수 추가
exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name: name,
      age: age,
      team_id: team_id,
    });
    res.send(newPlayer);
  } catch (err) {
    res.send('Internal Server Error!');
  }
};
// 특정 선수의 소속 팀 변경
exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;
    const updatedPlayer = await Player.update(
      { team_id: team_id },
      {
        where: {
          player_id: player_id,
        },
      }
    );
    res.send(updatedPlayer); //성공시[1], 실패시[0]
  } catch (err) {
    res.send('Internal Server Error!');
  }
};
//  특정 선수 삭제
exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({
      where: { player_id: player_id },
    });

    console.log(isDeleted); //성공시 1, 실패시 0
    if (isDeleted) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};
//  전체 팀 조회
exports.getTeams = async (req, res) => {
  try {
    // 쿼리 스트링 꺼내오기 (req.query)
    // sort 키가 있으면 name 기준 오름차순 정렬
    const { sort, search } = req.query; //{ sort: 'name_asc' }
    let teams;
    if (sort == 'name_asc') {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'asc']],
      });
    } else if (search) {
      //search 키에 대한 값이 있다면
      console.log(search);
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        //SELECT * from teams where name = '%KT%';
        where: {
          name: {
            //[Op.like]: `%${search}%`
            [Op.substring]: `${search}`,
          },
        },
      });
    } else {
      //없으면 findAll()
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
      }); //team_id랑 name 속성만 내보내기
    }
    res.send(teams);
  } catch (err) {
    console.log(err);
    res.send('Internal Server Error!');
  }
};

exports.getTeam = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      attributes: ['team_id', 'name'],
      //order:[['name','ACS']] //name 속성 기준 오름차순
      where: { team_id: team_id },
    });
    res.send(team);
  } catch (err) {
    res.send('Internal Server Error!');
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id: team_id }, //특정 팀 하나 조회
      include: [{ attributes: ['player_id', 'name'], model: Player }], //join 역할 -> 팀에다가 player model 정보를 포함
    });
    res.send(team);
  } catch (err) {
    res.send('Internal Server Error!');
  }
};
